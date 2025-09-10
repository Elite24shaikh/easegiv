import type { Metadata } from "next";
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "EasyGiv",
  description: "Design. Print. Deliver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link
          href="https://api.fontshare.com/v2/css?f[]=pally@400,500&display=swap"
          rel="stylesheet"
        /> */}
        <link href="https://api.fontshare.com/v2/css?f[]=rowan@500&display=swap" rel="stylesheet"></link>
        
        {/* <style>{`Pally`}</style> */}
        
      </head>
      <body className="font-Rowan">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
