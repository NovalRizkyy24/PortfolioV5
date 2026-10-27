import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Faq = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-6">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-${i}`;
        return (
          <div
            key={item.question}
            className={`border border-line-soft bg-white transition-[border-radius,border-color] duration-500 hover:border-line ${
              isOpen ? 'rounded-card' : 'rounded-[48px]'
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-10 md:py-[30px]"
              >
                <span className="text-lg leading-[1.2] font-semibold md:text-2xl">{item.question}</span>
                <span className="relative size-[30px] shrink-0" aria-hidden="true">
                  <span className="absolute top-1/2 left-[5px] h-[1.5px] w-5 -translate-y-1/2 rounded bg-ink" />
                  <span
                    className={`absolute top-[5px] left-1/2 h-5 w-[1.5px] -translate-x-1/2 rounded transition-transform duration-500 ${
                      isOpen ? 'scale-y-0 bg-ink' : 'bg-line'
                    }`}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 leading-[1.6] text-body md:px-10 md:pb-[30px]">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
