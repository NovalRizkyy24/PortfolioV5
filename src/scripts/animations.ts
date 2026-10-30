// Animasi global berbasis Motion (vanilla API). Dimuat sekali di BaseLayout.
//   [data-reveal]          fade + slide up saat masuk viewport (opsional data-reveal-delay="0.1")
//   [data-counter]         hitung angka dari 0 ke data-counter saat terlihat
//   [data-word-reveal]     warna kata berubah abu-abu -> hitam mengikuti scroll
//   [data-stack]           kartu sticky yang mengecil saat kartu berikutnya menumpuk
//   [data-load-more]       tombol untuk menampilkan item tersembunyi
import { animate, inView, scroll } from 'motion';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const ease = [0.22, 1, 0.36, 1] as const;

function initReveal() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (reduceMotion) return;
    const delay = Number(el.dataset.revealDelay ?? 0);
    inView(
      el,
      () => {
        animate(el, { opacity: [0, 1], y: [40, 0] }, { duration: 0.9, delay, ease });
      },
      { margin: '0px 0px -10% 0px' },
    );
  });
}

function initCounters() {
  document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
    const target = Number(el.dataset.counter);
    if (reduceMotion) {
      el.textContent = String(target);
      return;
    }
    el.textContent = '0';
    inView(el, () => {
      animate(0, target, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => (el.textContent = String(Math.round(v))),
      });
    });
  });
}

function initWordReveal() {
  document.querySelectorAll<HTMLElement>('[data-word-reveal]').forEach((el) => {
    const words = [...el.querySelectorAll<HTMLElement>('[data-word]')];
    const paint = (progress: number) => {
      const lit = Math.round(progress * words.length);
      words.forEach((w, i) => w.classList.toggle('text-ink', i < lit));
    };
    if (reduceMotion) return paint(1);
    scroll(paint, { target: el, offset: ['start 85%', 'end 45%'] });
  });
}

function initStack() {
  document.querySelectorAll<HTMLElement>('[data-stack]').forEach((stack) => {
    const cards = [...stack.querySelectorAll<HTMLElement>('[data-stack-card]')];
    if (reduceMotion || !window.matchMedia('(min-width: 810px)').matches) return;
    const n = cards.length;
    scroll(
      (progress: number) => {
        cards.forEach((card, i) => {
          // Kartu i mulai mengecil setelah kartu berikutnya mulai menumpuk
          const start = i / n;
          const local = Math.min(Math.max((progress - start) / (1 - start), 0), 1);
          const targetScale = 1 - (n - 1 - i) * 0.04;
          (card.firstElementChild as HTMLElement).style.transform = `scale(${1 - local * (1 - targetScale)})`;
        });
      },
      { target: stack, offset: ['start start', 'end end'] },
    );
  });
}

function initLoadMore() {
  document.querySelectorAll<HTMLButtonElement>('[data-load-more]').forEach((btn) => {
    const list = document.getElementById(btn.dataset.loadMore!);
    btn.addEventListener('click', () => {
      const hidden = [...(list?.querySelectorAll<HTMLElement>('[data-hidden]') ?? [])];
      const step = Number(btn.dataset.step ?? hidden.length);
      hidden.slice(0, step).forEach((item, i) => {
        item.removeAttribute('data-hidden');
        item.classList.remove('hidden');
        if (!reduceMotion) animate(item, { opacity: [0, 1], y: [40, 0] }, { duration: 0.7, delay: i * 0.08, ease });
      });
      if (hidden.length <= step) btn.remove();
    });
  });
}

/** Lingkaran lime "View case" yang mengikuti kursor di atas kartu proyek (desktop saja). */
function initViewCaseCursor() {
  const targets = document.querySelectorAll<HTMLElement>('[data-view-case]');
  if (!targets.length || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'view-case-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML =
    '<svg viewBox="0 0 18 18" width="18" height="18" fill="none"><path d="M5 13 13 5M6 5h7v7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>View case</span>';
  document.body.append(cursor);

  let x = 0;
  let y = 0;
  const move = (e: PointerEvent) => {
    x = e.clientX;
    y = e.clientY;
    animate(cursor, { x, y }, { duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' });
  };
  targets.forEach((el) => {
    el.addEventListener('pointerenter', (e) => {
      animate(cursor, { x: e.clientX, y: e.clientY }, { duration: 0 });
      animate(cursor, { scale: 1, opacity: 1 }, { duration: 0.35, ease });
    });
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', () => animate(cursor, { scale: 0, opacity: 0 }, { duration: 0.3, ease }));
  });
  // Ikuti posisi saat halaman di-scroll tanpa menggerakkan mouse
  window.addEventListener('scroll', () => {
    const hovered = document.elementFromPoint(x, y)?.closest('[data-view-case]');
    if (!hovered) animate(cursor, { scale: 0, opacity: 0 }, { duration: 0.2 });
  }, { passive: true });
}

// Animasi masuk ditunda sampai layar pembuka (Preloader.astro) selesai
if (document.documentElement.classList.contains('preloading')) {
  window.addEventListener('preloader:done', () => {
    initReveal();
    initCounters();
  }, { once: true });
} else {
  initReveal();
  initCounters();
}
initViewCaseCursor();
initWordReveal();
initStack();
initLoadMore();
