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
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isSolid
            ? "border-b border-foreground/10 bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container flex h-[4.5rem] items-center gap-6 md:h-20">
          <Link href="/" className="group flex items-center gap-3" aria-label="EvoLab home">
            <Image
              src="/images/EVOLAB_LOGO.png"
              alt=""
              width={56}
              height={56}
              className="h-11 w-11 md:h-12 md:w-12"
            />
            <span className="font-display text-3xl leading-none transition-colors group-hover:text-primary md:text-4xl">
              EvoLab
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    active && "text-primary hover:text-primary",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-px left-0 h-px bg-primary transition-all duration-300",
                      active ? "w-full" : "w-0",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              )
            })}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="ml-auto flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-primary md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-300 md:hidden",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!isMenuOpen}
      >
        <nav className="container flex h-full flex-col justify-center gap-2 pb-16">
          {navLinks.map((link, index) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={isMenuOpen ? 0 : -1}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group flex items-baseline border-b border-foreground/10 py-5 transition-all duration-500",
                  active ? "text-primary" : "text-foreground hover:text-primary",
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
                style={{ transitionDelay: isMenuOpen ? `${80 + index * 60}ms` : "0ms" }}
              >
                <span className="font-display text-4xl leading-none">{link.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}
