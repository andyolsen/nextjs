import type { Metadata } from "next";
import "./globals.css";
import Menu from "./_components/menu"

export const metadata: Metadata = {
  title: "Simple Client Components Demo",
  description: "Getting started with client components in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Simple Client Components Demo</div>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
