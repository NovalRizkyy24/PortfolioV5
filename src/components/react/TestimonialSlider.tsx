import { useCallback, useEffect, useRef, useState } from 'react';
import { useAnimate, useReducedMotion } from 'motion/react';

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  image: { src: string; srcset?: string };
};

const GAP = 24;

function Card({ t, hidden }: { t: TestimonialItem; hidden?: boolean }) {
  return (
    <figure
      aria-hidden={hidden || undefined}
      className="flex flex-col gap-6 rounded-card bg-surface p-4 md:flex-row md:gap-10 md:p-6"
    >
      <img
        src={t.image.src}
        srcSet={t.image.srcset}
        sizes="(min-width: 810px) 302px, 100vw"
        alt={hidden ? '' : t.name}
        loading="lazy"
        className="aspect-[302/292] w-full shrink-0 rounded-card object-cover md:w-[48%]"
      />
      <div className="flex flex-col justify-between gap-6 md:py-2">
        <blockquote className="text-base leading-[1.35] font-medium md:text-lg">{t.quote}</blockquote>
        <figcaption>
          <p className="text-lg font-semibold">{t.name}</p>
          <p className="mt-1 text-sm">{t.role}</p>
        </figcaption>
      </div>
    </figure>
  );
}

/**
 * Slider testimoni tanpa ujung: daftar digandakan 3x, lalu posisi "melompat" diam-diam
 * kembali ke salinan tengah setelah animasi selesai.
 */
export default function TestimonialSlider({ items }: { items: TestimonialItem[] }) {
  const n = items.length;
  const loop = [...items, ...items, ...items];
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const viewport = useRef<HTMLDivElement>(null);
  const index = useRef(n);
  const busy = useRef(false);
  const [live, setLive] = useState('');
  const reduce = useReducedMotion();

  const step = () => {
    const width = viewport.current?.clientWidth ?? 0;
    return (width - GAP) / 2 + GAP;
  };

  const place = useCallback(() => {
    if (scope.current) animate(scope.current, { x: -index.current * step() }, { duration: 0 });
  }, [scope, animate]);

  useEffect(() => {
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [place]);

  const go = async (dir: 1 | -1) => {
    if (busy.current) return;
    busy.current = true;
    index.current += dir;
    await animate(
      scope.current,
      { x: -index.current * step() },
      { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] },
    );
    if (index.current >= 2 * n || index.current < n) {
      index.current = ((index.current - n + n) % n) + n;
      await animate(scope.current, { x: -index.current * step() }, { duration: 0 });
    }
    const current = items[index.current % n];
    setLive(`${current.name}, ${current.role}`);
    busy.current = false;
  };

  return (
    <div>
      {/* Mobile: kartu bertumpuk */}
      <div className="flex flex-col gap-5 md:hidden">
        {items.map((t) => (
          <Card key={t.name} t={t} />
        ))}
      </div>

      {/* Tablet & desktop: slider 2 kartu */}
      <div className="hidden md:block" role="region" aria-roledescription="carousel" aria-label="Testimonials">
        <div ref={viewport} className="overflow-hidden">
          <div ref={scope} className="flex" style={{ gap: GAP }}>
            {loop.map((t, i) => (
              <div key={i} className="shrink-0" style={{ width: `calc((100% - ${GAP}px) / 2)` }}>
                <Card t={t} hidden={i < n || i >= 2 * n} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 flex justify-center gap-4">
          {[
            { dir: -1 as const, label: 'Previous testimonial', path: 'm14 8-4 4 4 4' },
            { dir: 1 as const, label: 'Next testimonial', path: 'm10 8 4 4-4 4' },
          ].map((b) => (
            <button
              key={b.dir}
              type="button"
              aria-label={b.label}
              onClick={() => go(b.dir)}
              className="flex h-12 w-14 items-center justify-center rounded-full border border-line transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
                <path d={b.path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          {live}
        </p>
      </div>
    </div>
  );
}
