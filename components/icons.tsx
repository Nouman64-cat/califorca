type IconProps = {
  className?: string;
};

const base = "1.5" as const;

export function MachineryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <circle cx="12" cy="14" r="6" />
      <circle cx="12" cy="14" r="2" />
      <path d="M12 4v4M8 5.5l1.5 3M16 5.5l-1.5 3" strokeLinecap="round" />
    </svg>
  );
}

export function BinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M5 7h14l-1.2 13.1a2 2 0 0 1-2 1.9H8.2a2 2 0 0 1-2-1.9L5 7Z" strokeLinejoin="round" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 7h18" strokeLinecap="round" />
    </svg>
  );
}

export function TrolleyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <rect x="4" y="9" width="7" height="8" rx="1" />
      <rect x="13" y="6" width="7" height="11" rx="1" />
      <path d="M6 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  );
}

export function BroomIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M15 4 6 13" strokeLinecap="round" />
      <path d="m6 13-3 7 7-3M13 6l5 5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20 9 11" strokeLinecap="round" />
    </svg>
  );
}

export function SqueegeeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M6 6h12v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6Z" />
      <path d="M12 10v10" strokeLinecap="round" />
    </svg>
  );
}

export function MopIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M12 3v9" strokeLinecap="round" />
      <path d="M7 12h10l1 3a4 4 0 0 1-4 5h-4a4 4 0 0 1-4-5l1-3Z" strokeLinejoin="round" />
    </svg>
  );
}

export function BrushIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <rect x="9" y="3" width="6" height="8" rx="1" />
      <path d="M10 11v3M14 11v3M9 14h6l-1 7h-4l-1-7Z" strokeLinejoin="round" />
    </svg>
  );
}

export function DispenserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <rect x="7" y="4" width="10" height="16" rx="2" />
      <path d="M9 9h6M9 13h6" strokeLinecap="round" />
      <path d="M11 4V2h2v2" />
    </svg>
  );
}

export function HouseholdIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M4 11 12 4l8 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" strokeLinejoin="round" />
    </svg>
  );
}

export function KitchenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M6 3v7a2 2 0 0 0 2 2v9M6 3v9M9 3v7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3c-1.5 2-1.5 6 0 8v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M11 4h6a2 2 0 0 1 2 2v6l-9 9-8-8 9-9Z" strokeLinejoin="round" />
      <circle cx="15" cy="8" r="1.3" />
    </svg>
  );
}

export function ThumbIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M7 10v10H4V10h3Zm0 0 4-7a2 2 0 0 1 2 2v4h5a2 2 0 0 1 2 2l-1.5 7a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5V10Z" strokeLinejoin="round" />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="17" cy="18" r="1.5" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PercentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M6 18 18 6" strokeLinecap="round" />
      <circle cx="7.5" cy="7.5" r="2" />
      <circle cx="16.5" cy="16.5" r="2" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

export function CartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
      <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M12 20s-7-4.4-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 5c-2.3 4.6-9.3 9-9.3 9Z" strokeLinejoin="round" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={base}>
      <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

export const categoryIconMap = {
  machinery: MachineryIcon,
  bin: BinIcon,
  trolley: TrolleyIcon,
  broom: BroomIcon,
  squeegee: SqueegeeIcon,
  mop: MopIcon,
  brush: BrushIcon,
  dispenser: DispenserIcon,
  household: HouseholdIcon,
  kitchen: KitchenIcon,
};

export const benefitIconMap = {
  tag: TagIcon,
  thumb: ThumbIcon,
  truck: TruckIcon,
  shield: ShieldIcon,
  percent: PercentIcon,
};
