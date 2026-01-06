import localFont from 'next/font/local'

export const font = localFont({
  src: [
    { path: "../../public/fonts/JetBrainsMono-Thin.ttf", weight: "100", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-ThinItalic.ttf", weight: "100", style: "italic" },

    { path: "../../public/fonts/JetBrainsMono-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-ExtraLightItalic.ttf", weight: "200", style: "italic" },

    { path: "../../public/fonts/JetBrainsMono-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-LightItalic.ttf", weight: "300", style: "italic" },

    { path: "../../public/fonts/JetBrainsMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-Italic.ttf", weight: "400", style: "italic" },

    { path: "../../public/fonts/JetBrainsMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-MediumItalic.ttf", weight: "500", style: "italic" },

    { path: "../../public/fonts/JetBrainsMono-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-SemiBoldItalic.ttf", weight: "600", style: "italic" },

    { path: "../../public/fonts/JetBrainsMono-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-BoldItalic.ttf", weight: "700", style: "italic" },

    { path: "../../public/fonts/JetBrainsMono-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
  ],
  variable: "--font-jet",
  display: "swap",
});
