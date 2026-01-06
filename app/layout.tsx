import "@/assets/css/globals.css";
import { font } from "@/assets/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
