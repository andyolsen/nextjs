import type { Metadata } from "next";
import "./globals.css";
import Menu from "./_components/menu"

export const metadata: Metadata = {
  title: "Server Actions Demo",
  description: "Understanding how to define and use server actions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Server Actions Demo</div>
        <Menu/>
        {children}
      </body>
    </html>
  );
}