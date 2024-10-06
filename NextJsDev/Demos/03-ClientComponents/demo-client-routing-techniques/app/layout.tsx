import type { Metadata } from "next";
import "./globals.css";
import Menu from "./_components/menu"
import NavBar from "./_components/navbar"

export const metadata: Metadata = {
  title: "Client Routing Techniques Demo",
  description: "Routing techniques specific to client components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Client Routing Techniques Demo</div>
        <Menu/>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
