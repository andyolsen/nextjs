import type { Metadata } from "next";
import "./globals.css";
import Menu from "./_components/menu"

export const metadata: Metadata = {
  title: "Special Files Demo",
  description: "Special files in a Next.js applicsation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div className="banner">Special Files Demo</div>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
