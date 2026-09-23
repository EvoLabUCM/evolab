import Link from "next/link"
import Image from "next/image"
import { withBasePath } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

const exploreLinks = [
  { label: "People", href: "/people" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Media", href: "/media" },
]

const linkClass = "text-white/85 transition-colors hover:text-[#ffce42]"
const headingClass = "text-xs font-semibold uppercase tracking-wider text-[#ffce42]"

export function Footer() {
  return (
    <footer className="border-t-4 border-[#ffce42]">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_auto] md:gap-x-12">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={withBasePath("/images/Stay_Human_NoText.png")}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-bold text-white">STAY HUMAN LAB</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              HRI focus Cognitive Science research lab at UC Merced ran by Dr. Colin Holbrook.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={headingClass}>Department</h2>
            <a
              href="https://cogsci.ucmerced.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pt-1"
            >
              <Image
                src={withBasePath("/images/cogsci-logo.png")}
                alt="UC Merced Cognitive & Information Sciences"
                width={1024}
                height={325}
                className="h-auto w-44 opacity-85 transition-opacity hover:opacity-100"
              />
            </a>
          </div>

          <nav aria-label="Footer" className="space-y-3 md:justify-self-end md:text-right">
            <h2 className={headingClass}>Explore</h2>
            <ul className="space-y-2 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Stay Human Lab.</p>
          <p>University of California, Merced</p>
        </div>
      </div>
    </footer>
  )
}
