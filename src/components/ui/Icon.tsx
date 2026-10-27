import { icons, type IconName } from '@/data/icons';

type Props = { name: IconName; size?: number; className?: string };

/** Versi React dari Icon.astro, untuk dipakai di dalam komponen island. */
export default function Icon({ name, size = 20, className }: Props) {
  const icon = icons[name];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill={icon.fill}
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: icon.body }}
    />
  );
}
