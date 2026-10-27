import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Icon from '@/components/ui/Icon';
import CountUp from './CountUp';

export type ServiceItem = {
  title: string;
  description: string;
  image: { src: string; srcset?: string; width: number; height: number };
  stats: { value: number; label: string }[];
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesAccordion({ services }: { services: ServiceItem[] }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-5">
      {services.map((service, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <article key={service.title} className="rounded-card border border-ink bg-white md:rounded-section">
            <h3>
              <button
                type="button"
                className="group flex w-full items-center justify-between gap-4 p-5 text-left md:p-10"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="text-2xl leading-[1.2] font-bold md:text-[32px]">{service.title}</span>
                <span
                  className={`flex h-10 w-[50px] shrink-0 items-center justify-center rounded-full border border-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-white ${
                    isOpen ? 'bg-ink text-white' : ''
                  }`}
                >
                  <Icon
                    name="arrow-down-right"
                    size={20}
                    className={`transition-transform duration-500 ${isOpen ? '-rotate-90' : ''}`}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 px-5 pb-5 md:px-10 md:pb-10 lg:grid-cols-[540px_1fr] lg:gap-[84px]">
                    <div className="flex flex-col justify-between gap-10">
                      <p className="leading-[1.6] text-body">{service.description}</p>
                      <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                        {service.stats.map((stat) => (
                          <div key={stat.label} className="flex flex-col-reverse border-b border-line pb-2">
                            <dt className="mt-2 font-medium text-body">{stat.label}</dt>
                            <dd className="text-[32px] leading-[1.2] font-semibold md:text-[40px]">
                              <CountUp value={stat.value} suffix="+" />
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div className="overflow-hidden rounded-card">
                      <motion.img
                        src={service.image.src}
                        srcSet={service.image.srcset}
                        sizes="(min-width: 1200px) 576px, 100vw"
                        width={service.image.width}
                        height={service.image.height}
                        alt=""
                        loading="lazy"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease }}
                        className="aspect-9/5 w-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
