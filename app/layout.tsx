import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Devanagari } from "next/font/google"
import "./globals.css"

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  display: "swap",
  variable: "--font-devanagari",
})

export const metadata: Metadata = {
  title: "शाखा पुस्तिका - प्रीमियर संस्थान",
  description: "शाखा पुस्तिका - प्रीमियर संस्थान, हरियाणा प्रांत",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html translate="no" lang="hi">
      <body className={`${notoSansDevanagari.variable} font-devanagari antialiased`}>{children}</body>
    </html>
  )
}
