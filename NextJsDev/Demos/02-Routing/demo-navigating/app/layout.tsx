import type { Metadata } from "next";
import "./globals.css";
import Menu from "./_components/menu"

export const metadata: Metadata = {
  title: "Navigating Demo",
  description: "Getting started with navigating in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Navigating Demo</div>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
