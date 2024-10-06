import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Routing Demo",
  description: "Example of simple routing in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Simple Routing Demo</div>
        {children}
      </body>
    </html>
  );
}
