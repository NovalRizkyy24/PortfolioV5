import { useState, type SubmitEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Props = {
  purposes: string[];
  /** Email tujuan untuk fallback mailto bila PUBLIC_FORM_ENDPOINT belum diisi */
  fallbackEmail: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

// Isi di file .env, contoh Formspree: PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
const ENDPOINT = import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined;

const field =
  'h-14 w-full rounded-2xl border border-line-soft bg-surface px-5 text-base text-ink outline-none transition-colors placeholder:text-[#8a8585] focus:border-ink focus:bg-white';
const label = 'mb-2 block text-sm font-semibold';

export default function ContactForm({ purposes, fallbackEmail }: Props) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!ENDPOINT) {
      // Tanpa backend: buka aplikasi email pengguna dengan isi form
      const body = [
        `Name: ${data.get('name')}`,
        `Email: ${data.get('email')}`,
        `Purpose: ${data.get('purpose')}`,
        '',
        String(data.get('message')),
      ].join('\n');
      const subject = String(data.get('subject'));
      window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <label>
        <span className={label}>Full Name</span>
        <input name="name" required autoComplete="name" placeholder="John Doe" className={field} />
      </label>
      <label>
        <span className={label}>Email Address</span>
        <input name="email" type="email" required autoComplete="email" placeholder="john@example.com" className={field} />
      </label>
      <label>
        <span className={label}>Purpose of Contact</span>
        <span className="relative block">
          <select name="purpose" required defaultValue="" className={`${field} cursor-pointer appearance-none pr-12 invalid:text-[#8a8585]`}>
            <option value="" disabled>
              Select a purpose
            </option>
            {purposes.map((p) => (
              <option key={p} value={p} className="text-ink">
                {p}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
          >
            <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </label>
      <label>
        <span className={label}>Subject</span>
        <input name="subject" required placeholder="What would you like to discuss?" className={field} />
      </label>
      <label>
        <span className={label}>Message</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project or inquiry..."
          className={`${field} h-auto resize-y py-4`}
        />
      </label>

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-accent px-10 font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-white disabled:opacity-60 sm:w-auto"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
          <svg
            className="transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="none"
            aria-hidden="true"
          >
            <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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
