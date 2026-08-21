import localFont from "next/font/local";

// Keep font declarations here so every component can reuse the same
// self-hosted, optimized font instances without repeating file paths.
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

export const dancingScript = localFont({
  variable: "--font-dancing-script",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/Google_Sans,Google_Sans_Flex/Dancing_Script,Google_Sans,Google_Sans_Flex/Dancing_Script/DancingScript-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
});

export const fontVariables = `${googleSans.variable} ${dancingScript.variable}`;
