import type { Metadata } from "next";
import "./globals.css";
import Menu from "./_components/menu"

export const metadata: Metadata = {
  title: "Route Handlers Demo",
  description: "Understanding how and why to define route handlers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Route Handlers Demo</div>
        <Menu/>
        {children}
      </body>
    </html>
  );
}