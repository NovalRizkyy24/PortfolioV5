import { useState, type SubmitEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Props = {
  services: string[];
  budgets: string[];
  /** Email tujuan untuk fallback mailto bila PUBLIC_FORM_ENDPOINT belum diisi */
  fallbackEmail: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

// Isi di file .env, contoh Formspree: PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
const ENDPOINT = import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined;

const field =
  'h-[62px] w-full rounded-2xl border border-line-soft bg-white px-6 text-base text-ink outline-none transition-colors placeholder:text-[#726c6c] focus:border-ink';
const label = 'mb-3 block';

function Select({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="relative">
      <select name={name} required defaultValue="" className={`${field} cursor-pointer appearance-none pr-12 invalid:text-[#726c6c]`}>
        <option value="" disabled>
          Choose one...
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="none"
        aria-hidden="true"
      >
        <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function ContactForm({ services, budgets, fallbackEmail }: Props) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!ENDPOINT) {
      // Tanpa backend: buka aplikasi email pengguna dengan isi form
      const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
      window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent('New project inquiry')}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      <label>
        <span className={label}>Your name*</span>
        <input name="name" required autoComplete="name" placeholder="Enter your name" className={field} />
      </label>
      <label>
        <span className={label}>Your email*</span>
        <input name="email" type="email" required autoComplete="email" placeholder="Enter your email" className={field} />
      </label>
      <label>
        <span className={label}>Service*</span>
        <Select name="service" options={services} />
      </label>
      <label>
        <span className={label}>Your budget*</span>
        <Select name="budget" options={budgets} />
      </label>
      <label className="sm:col-span-2">
        <span className={label}>Message*</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Type something about your project..."
          className={`${field} h-auto resize-y py-5`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-10 font-medium transition-colors duration-300 hover:bg-ink hover:text-white disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>
        <AnimatePresence mode="wait">
          {(status === 'success' || status === 'error') && (
            <motion.p
              key={status}
              role="status"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={status === 'success' ? 'text-ink' : 'text-[#c0392b]'}
            >
              {status === 'success'
                ? 'Thank you! Your message has been sent.'
                : 'Something went wrong. Please try again or email me directly.'}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
