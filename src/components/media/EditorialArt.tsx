const PALETTES: { keys: string[]; from: string; to: string }[] = [
  { keys: ["rose", "love", "anbe"], from: "#f3d9d4", to: "#e8c3c9" },
  { keys: ["temple", "pride", "thamizhan"], from: "#e4dccb", to: "#cbbfa1" },
  { keys: ["summit", "motivation", "vetri"], from: "#f0dcb8", to: "#e0b988" },
  { keys: ["leaf", "nature", "forest", "kanni"], from: "#dfe6d3", to: "#c4d1b0" },
  { keys: ["hands", "friendship", "nanban"], from: "#e2ddec", to: "#cbc2e0" },
  { keys: ["flag", "mass", "fire", "thiruvizha", "festival"], from: "#f2ceb0", to: "#e8a878" },
  { keys: ["embrace", "mother", "amma", "mannin"], from: "#f0ddd6", to: "#e0bfae" },
  { keys: ["dawn-bird", "hope", "vaanavil", "window"], from: "#dbe6ee", to: "#bfd3e2" },
  { keys: ["coast", "kadal", "meengal"], from: "#d7e4e2", to: "#b7cdc9" },
  { keys: ["notebook", "arena", "script", "desk", "pen", "manuscript", "studio"], from: "#ede4d3", to: "#dccdb0" },
  { keys: ["trophy", "award"], from: "#f1e2bd", to: "#dfc689" },
  { keys: ["handwritten", "page"], from: "#efe8d8", to: "#ded2b4" },
  { keys: ["composer"], from: "#e6ddcd", to: "#cfc0a4" },
  { keys: ["singer"], from: "#ecdfd8", to: "#d8c1b3" },
  { keys: ["director"], from: "#dee3d8", to: "#c3ccbc" },
  { keys: ["actor"], from: "#e9ddd0", to: "#d4c2ab" },
  { keys: ["rainbow", "monsoon"], from: "#e4dfef", to: "#c9c1e0" },
  { keys: ["field", "farmland", "campus"], from: "#e3e7d2", to: "#c9d1ab" },
];

const FALLBACK_PALETTE = { from: "#eee6d8", to: "#ddcfb2" };

function resolvePalette(variant: string) {
  const lower = variant.toLowerCase();
  return PALETTES.find((p) => p.keys.some((k) => lower.includes(k))) || FALLBACK_PALETTE;
}

type IconKind = "flower" | "temple" | "summit" | "leaf" | "hands" | "flag" | "embrace" | "bird" | "wave" | "pen" | "trophy" | "page" | "monogram";

function resolveIcon(variant: string): IconKind {
  const lower = variant.toLowerCase();
  if (lower.includes("composer") || lower.includes("singer") || lower.includes("director") || lower.includes("actor")) return "monogram";
  if (lower.includes("rose") || lower.includes("love") || lower.includes("anbe")) return "flower";
  if (lower.includes("temple") || lower.includes("pride") || lower.includes("thamizhan")) return "temple";
  if (lower.includes("summit") || lower.includes("motivation") || lower.includes("vetri")) return "summit";
  if (lower.includes("leaf") || lower.includes("nature") || lower.includes("forest") || lower.includes("kanni")) return "leaf";
  if (lower.includes("hands") || lower.includes("friendship") || lower.includes("nanban")) return "hands";
  if (lower.includes("flag") || lower.includes("mass") || lower.includes("fire") || lower.includes("festival")) return "flag";
  if (lower.includes("embrace") || lower.includes("mother") || lower.includes("amma") || lower.includes("mannin")) return "embrace";
  if (lower.includes("dawn-bird") || lower.includes("hope") || lower.includes("vaanavil")) return "bird";
  if (lower.includes("coast") || lower.includes("kadal") || lower.includes("meengal") || lower.includes("monsoon")) return "wave";
  if (lower.includes("trophy") || lower.includes("award")) return "trophy";
  if (lower.includes("handwritten") || lower.includes("page")) return "page";
  return "pen";
}

function Icon({ kind }: { kind: IconKind }) {
  const stroke = "#9A6838";
  const common = { stroke, strokeWidth: 1.5, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "flower":
      return (
        <g {...common}>
          <circle cx="50" cy="42" r="7" />
          <path d="M50 49 C 40 60, 40 75, 50 85" />
          <path d="M50 60 C 42 58, 36 62, 34 68" />
        </g>
      );
    case "temple":
      return (
        <g {...common}>
          <path d="M35 85 L35 60 L50 35 L65 60 L65 85" />
          <path d="M42 85 L42 68 L58 68 L58 85" />
        </g>
      );
    case "summit":
      return (
        <g {...common}>
          <path d="M25 80 L45 45 L55 60 L65 40 L80 80" />
          <circle cx="45" cy="38" r="4" />
        </g>
      );
    case "leaf":
      return (
        <g {...common}>
          <path d="M50 30 C 70 45, 70 70, 50 88 C 30 70, 30 45, 50 30 Z" />
          <path d="M50 34 L50 84" />
        </g>
      );
    case "hands":
      return (
        <g {...common}>
          <path d="M25 55 L45 60 L45 70 L30 68" />
          <path d="M75 55 L55 60 L55 70 L70 68" />
        </g>
      );
    case "flag":
      return (
        <g {...common}>
          <path d="M40 30 L40 88" />
          <path d="M40 34 L68 42 L40 50" />
        </g>
      );
    case "embrace":
      return (
        <g {...common}>
          <circle cx="42" cy="42" r="8" />
          <circle cx="62" cy="52" r="5" />
          <path d="M30 82 C 30 62, 54 62, 54 82" />
          <path d="M54 82 C 54 70, 70 70, 70 82" />
        </g>
      );
    case "bird":
      return (
        <g {...common}>
          <path d="M25 55 C 38 45, 45 45, 50 55 C 55 45, 62 45, 75 55" />
        </g>
      );
    case "wave":
      return (
        <g {...common}>
          <path d="M22 55 C 32 45, 42 65, 52 55 C 62 45, 72 65, 82 55" />
          <path d="M22 68 C 32 58, 42 78, 52 68 C 62 58, 72 78, 82 68" />
        </g>
      );
    case "trophy":
      return (
        <g {...common}>
          <path d="M40 38 L60 38 L58 55 C 58 65, 42 65, 42 55 Z" />
          <path d="M46 65 L46 74 L54 74 L54 65" />
          <path d="M40 74 L60 74" />
          <path d="M40 40 C 32 40, 32 52, 42 52" />
          <path d="M60 40 C 68 40, 68 52, 58 52" />
        </g>
      );
    case "page":
      return (
        <g {...common}>
          <path d="M35 30 L58 30 L65 37 L65 85 L35 85 Z" />
          <path d="M58 30 L58 37 L65 37" />
          <path d="M41 50 L59 50 M41 58 L59 58 M41 66 L52 66" />
        </g>
      );
    case "monogram":
      return null;
    case "pen":
    default:
      return (
        <g {...common}>
          <path d="M32 78 L64 34 L70 40 L38 84 Z" />
          <path d="M60 38 L66 44" />
          <path d="M30 82 L38 84 L32 78 Z" fill={stroke} />
        </g>
      );
  }
}

interface EditorialArtProps {
  variant: string;
  className?: string;
  label?: string;
  monogram?: string;
  alt?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}

const ROUNDED_CLASS: Record<NonNullable<EditorialArtProps["rounded"]>, string> = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-2xl",
  full: "rounded-full",
};

/**
 * Self-contained, decorative SVG "artwork" standing in for a photograph.
 * Every visual surface in the archive (posters, portraits, theme tiles,
 * journal thumbnails) renders through this so the frontend ships with zero
 * external image dependencies while still reading as an intentional,
 * editorial illustration system.
 */
export function EditorialArt({ variant, className = "", label, monogram, alt, rounded = "md" }: EditorialArtProps) {
  const palette = resolvePalette(variant);
  const icon = resolveIcon(variant);
  const gradientId = `grad-${variant.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <div
      className={`relative overflow-hidden ${ROUNDED_CLASS[rounded]} ${className}`}
      role={alt ? "img" : undefined}
      aria-label={alt}
      aria-hidden={alt ? undefined : true}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.from} />
            <stop offset="100%" stopColor={palette.to} />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100" height="100" fill={`url(#${gradientId})`} />
        {icon === "monogram" ? (
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fontFamily="var(--font-serif)"
            fontSize="30"
            fill="#7d5329"
            opacity="0.75"
          >
            {monogram || label?.slice(0, 1) || "?"}
          </text>
        ) : (
          <Icon kind={icon} />
        )}
      </svg>
      {label && (
        <span className="absolute bottom-2 left-2 right-2 truncate font-serif text-xs text-ink/70">{label}</span>
      )}
    </div>
  );
}
