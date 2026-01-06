import "@/assets/css/globals.css";
import { bit8, jet } from "@/assets/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jet.variable} ${bit8.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
