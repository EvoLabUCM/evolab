"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/people", label: "People" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/media", label: "Media" },
] as const

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function MainNav() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // The home page opens with a full-bleed hero, so the bar starts transparent
  // there and only takes on a surface once the hero is behind it.
  const isTransparentAtTop = pathname === "/"

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile sheet on navigation.
  useEffect(() => setIsMenuOpen(false), [pathname])

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const isSolid = isScrolled || !isTransparentAtTop || isMenuOpen

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/EVOLAB_LOGO.png"
            alt="EvoLab Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-bold bg-gradient-to-r from-[#E0B872] to-[#8B6D3C] bg-clip-text text-transparent">
            EvoLab
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 overflow-x-auto md:overflow-visible">
          <Link href="/people" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
            People
          </Link>
          <Link href="/research" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
            Research
          </Link>
          <Link
            href="/publications"
            className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap"
          >
            Publications
          </Link>
          <Link href="/media" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
            Media
          </Link>
        </nav>
      </div>
    </>
  )
}
