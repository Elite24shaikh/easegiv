import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: 'EasyGiv',
  description: 'Design. Print. Deliver.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <link href="https://api.fontshare.com/v2/css?f[]=pally@400,500&display=swap" rel="stylesheet" />
      </head>
      <body>
      <Navbar />
        {children}</body>
    </html>
  )
}
