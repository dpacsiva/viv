import localFont from "next/font/local";

// Google Sans — self-hosted from /public/fonts. This is the only font
// family in the app: it covers both Latin and Tamil script (unlike
// "Google Sans Flex" in the same download, which has no Tamil glyphs at
// all), so it's used for headings, body copy, nav, and Tamil lyric text
// alike. It's a variable font (wght 400–700, regular + italic).
export const googleSans = localFont({
  variable: "--font-google-sans",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/Google_Sans,Google_Sans_Flex/Google_Sans/GoogleSans-VariableFont_GRAD,opsz,wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Google_Sans,Google_Sans_Flex/Google_Sans/GoogleSans-Italic-VariableFont_GRAD,opsz,wght.ttf",
      style: "italic",
    },
  ],
});

export const fontVariables = googleSans.variable;
