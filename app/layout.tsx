import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "EvoLab - Stay Human",
    template: "%s - EvoLab",
  },
  // Kept under ~160 characters so search results don't truncate it.
  description:
    "EvoLab is a Human-Robot Interaction focused research lab at UC Merced, using humanoid robots, virtual reality, and fNIRS neuroimaging to study trust in AI.",
  keywords: [
    "human-robot interaction",
    "human-AI trust",
    "overtrust",
    "fNIRS",
    "virtual reality",
    "cognitive science",
    "UC Merced",
  ],
  openGraph: {
    title: "EvoLab - Stay Human",
    // Preview cards render more text than a search result, so this carries the
    // full statement from the home page.
    description:
      "EvoLab is a Human-Robot Interaction focused research lab at UC Merced. We use humanoid robots, virtual reality, and fNIRS neuroimaging to study how people give trust to artificial intelligence, and what it costs when they give too much.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${instrumentSerif.variable}`}
    >
      <head>
        {/* Scroll reveals start hidden and are shown by IntersectionObserver.
            Without scripting that never happens, so unhide everything. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: ".reveal{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
