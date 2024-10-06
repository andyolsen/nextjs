import type { Metadata } from "next";
import "./globals.css";
import Menu from "./_components/menu"

export const metadata: Metadata = {
  title: "Server Components Demo",
  description: "Why and how to use server components in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Server Components Demo</div>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
