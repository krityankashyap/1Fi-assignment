/**
 * Lightweight inline SVG icon set (stroke-based, currentColor).
 * Kept dependency-free so the bundle stays small and icons inherit
 * the 1Fi violet on active/hover states.
 */
type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const base = (size: number): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

export const HomeIcon = ({ size = 24, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
    <path d="M9.5 21v-6h5v6" />
  </svg>
);

export const ShopIcon = ({ size = 24, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <path d="M4 9h16l-1 11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L4 9Z" />
    <path d="M4 9l1.6-4.2A1 1 0 0 1 6.5 4h11a1 1 0 0 1 .9.8L20 9" />
    <path d="M9 13a3 3 0 0 0 6 0" />
  </svg>
);

export const EmiIcon = ({ size = 24, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <rect x="4" y="3.5" width="16" height="17" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>
);

export const LimitIcon = ({ size = 24, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="M8 16l3.5-4 3 2.5L20 8" />
  </svg>
);

export const ProfileIcon = ({ size = 24, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
  </svg>
);

export const SearchIcon = ({ size = 20, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </svg>
);

export const ChevronLeft = ({ size = 24, strokeWidth = 2, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <path d="m15 5-7 7 7 7" />
  </svg>
);

export const ChevronRight = ({ size = 24, strokeWidth = 2, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);

export const ChevronDown = ({ size = 20, strokeWidth = 2, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronUp = ({ size = 20, strokeWidth = 2, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <path d="m6 15 6-6 6 6" />
  </svg>
);

export const ArrowRight = ({ size = 22, strokeWidth = 2.2, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ShareIcon = ({ size = 20, strokeWidth = 1.9, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <circle cx="6" cy="12" r="2.4" />
    <circle cx="17" cy="6" r="2.4" />
    <circle cx="17" cy="18" r="2.4" />
    <path d="m8.2 10.8 6.6-3.6M8.2 13.2l6.6 3.6" />
  </svg>
);

export const SparkleIcon = ({ size = 16, strokeWidth = 1.6, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
  </svg>
);

export const TicketIcon = ({ size = 18, strokeWidth = 1.7, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4Z" />
    <path d="M14 6v12" strokeDasharray="2 2" />
  </svg>
);

export const CheckCircle = ({ size = 20, strokeWidth = 1.8, className }: IconProps) => (
  <svg {...base(size)} strokeWidth={strokeWidth} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);
