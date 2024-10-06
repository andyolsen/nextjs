import type { Metadata } from "next";
import "./globals.css";
import Menu from "./_components/menu"

export const metadata: Metadata = {
  title: "Parallel Routes Demo",
  description: "Parallel routes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Parallel Routes Demo</div>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
