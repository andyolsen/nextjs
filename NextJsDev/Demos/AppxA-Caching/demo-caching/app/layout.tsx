import type { Metadata } from "next";
import "./globals.css";
import Menu from "./_components/menu"

export const metadata: Metadata = {
  title: "Caching Demo",
  description: "Understanding Next.js caching mechanisms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Caching Demo</div>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
