import localFont from "next/font/local";

export const jet = localFont({
  src: [
    { path: "../../public/assets/fonts/jet/JetBrainsMono-Thin.ttf", weight: "100", style: "normal" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/assets/fonts/jet/JetBrainsMono-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
  ],
  variable: "--font-jet",
  display: "swap",
});

export const bit8 = localFont({
  src: [
    { path: "../../public/assets/fonts/bit8/8bitOperatorPlus8-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/assets/fonts/bit8/8bitOperatorPlus8-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-bit8",
  display: "swap",
});
