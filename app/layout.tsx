import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stay Human Lab",
  description: "Studying human-AI over-reliance, overtrust and parasocial bonding",
  icons: {
    icon: "/images/Stay_Human_NoText.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
