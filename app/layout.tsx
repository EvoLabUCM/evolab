import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { VideoBackground } from "@/components/video-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EvoLab - Cognitive Science Research",
  description: "Studying human-AI interaction and trust in crisis situations",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <VideoBackground
          videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ameca%20Humanoid%20Robot%20AI%20Platform-w6ggiGZO8cCV74LJAppMeNb8Z0OErW.mp4"
          overlayOpacity={0.85}
        />
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
