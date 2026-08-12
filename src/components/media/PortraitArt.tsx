export function PortraitArt({ className = "", alt = "Editorial portrait of Vivek" }: { className?: string; alt?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} role="img" aria-label={alt}>
      <svg viewBox="0 0 300 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <defs>
          <linearGradient id="portrait-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#1c1c1c" />
          </linearGradient>
        </defs>
        <rect width="300" height="360" fill="url(#portrait-bg)" />
        <g opacity="0.9">
          <ellipse cx="150" cy="330" rx="120" ry="90" fill="#0f0f0f" />
          <path
            d="M150 300 C 110 300, 90 275, 90 240 L90 190 C 90 150, 115 125, 150 125 C 185 125, 210 150, 210 190 L210 240 C 210 275, 190 300, 150 300 Z"
            fill="#4a4a4a"
          />
          <path d="M92 195 C 85 165, 105 118, 150 116 C 195 118, 215 165, 208 195 C 200 170, 180 150, 150 150 C 120 150, 100 170, 92 195 Z" fill="#151515" />
          <path d="M108 220 C 112 232, 128 238, 150 238 C 172 238, 188 232, 192 220" stroke="#1c1c1c" strokeWidth="2" fill="none" />
        </g>
        <rect width="300" height="360" fill="#9A6838" opacity="0.06" />
      </svg>
    </div>
  );
}
