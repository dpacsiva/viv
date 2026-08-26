export type LyricsArchiveIconName =
  | "arrow"
  | "book"
  | "chevron"
  | "film"
  | "feather"
  | "globe"
  | "list"
  | "music"
  | "search"
  | "spark"
  | "star";

export function LyricsArchiveIcon({
  name,
  size = 20,
  className = "",
}: {
  name: LyricsArchiveIconName;
  size?: number;
  className?: string;
}) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...commonProps}>
          <path d="M5 12h13" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "book":
      return (
        <svg {...commonProps}>
          <path d="M4 5.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v15a2 2 0 0 0-2-1.5H6a2 2 0 0 0-2 2z" />
          <path d="M20 5.5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v15a2 2 0 0 1 2-1.5h4a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...commonProps}>
          <path d="m9 5 7 7-7 7" />
        </svg>
      );
    case "film":
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="5" width="17" height="14" rx="2" />
          <path d="M8 5v14M16 5v14M3.5 9.5H8M16 9.5h4.5M3.5 14.5H8M16 14.5h4.5" />
        </svg>
      );
    case "feather":
      return (
        <svg {...commonProps}>
          <path d="M19.5 4.5C14 3.4 7.1 6.1 5.2 12.2c-1 3.2.4 5.8.4 5.8s2.7 1.4 5.8.4c6.1-1.9 8.8-8.8 8.1-14.3Z" />
          <path d="M4.5 20 13 11.5M8.5 15.5l-.2-3.1M12 12l3.2.2M15.5 8.5l-.1 3" />
        </svg>
      );
    case "globe":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5s-1.1 6.2-3.2 8.5c-2.1-2.3-3.2-5.1-3.2-8.5S9.9 5.8 12 3.5Z" />
        </svg>
      );
    case "list":
      return (
        <svg {...commonProps}>
          <path d="M8 6h12M8 12h12M8 18h12" />
          <path d="M4 6h.01M4 12h.01M4 18h.01" strokeWidth="3" />
        </svg>
      );
    case "music":
      return (
        <svg {...commonProps}>
          <path d="M9 18V5l10-2v13" />
          <circle cx="6.5" cy="18" r="3" />
          <circle cx="16.5" cy="16" r="3" />
        </svg>
      );
    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 4.5 4.5" />
        </svg>
      );
    case "spark":
      return (
        <svg {...commonProps}>
          <path d="m12 3 1.35 5.65L19 10l-5.65 1.35L12 17l-1.35-5.65L5 10l5.65-1.35zM19 16l.65 2.35L22 19l-2.35.65L19 22l-.65-2.35L16 19l2.35-.65z" />
        </svg>
      );
    case "star":
      return (
        <svg {...commonProps}>
          <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.9z" />
        </svg>
      );
  }
}
