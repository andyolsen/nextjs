import type { Metadata } from "next";
import "./globals.css";
import Menu from "./_components/menu"

export const metadata: Metadata = {
  title: "Dynamic Routes Demo",
  description: "Dynamic (parameterized) routes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Dynamic Routes Demo</div>
        <Menu/>
        {children}
      </body>
    </html>
  );
}
