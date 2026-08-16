import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const explore = [
  { href: "/people", label: "People" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/media", label: "Media" },
] as const

const elsewhere = [
  {
    href: "https://scholar.google.com/citations?user=uYopsrAAAAAJ&hl=en",
    label: "Google Scholar",
  },
  { href: "http://colinholbrook.com", label: "Colin Holbrook" },
  {
    href: "https://cogsci.ucmerced.edu/",
    label: "Cognitive & Information Sciences",
  }
] as const

export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 bg-surface/40">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="space-y-6 md:col-span-5">
            <Link href="/" className="group flex items-center gap-3">
              <Image
                src="/images/EVOLAB_LOGO.png"
                alt=""
                width={44}
                height={44}
                className="h-10 w-10"
              />
              <span className="font-display text-2xl leading-none transition-colors group-hover:text-primary">
                EvoLab
              </span>
            </Link>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              A Human-Robot Interaction focused research lab at UC Merced. We use
              humanoid robots, virtual reality, and fNIRS neuroimaging to study
              how people give trust to artificial intelligence, and what it costs
              when they give too much.
            </p>
            <p className="font-display text-2xl text-primary">Stay Human.</p>
          </div>

          <nav className="space-y-5 md:col-span-3" aria-label="Site">
            <h2 className="label">Explore</h2>
            <ul className="space-y-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-draw text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-5 md:col-span-4" aria-label="External">
            <h2 className="label">Elsewhere</h2>
            <ul className="space-y-3">
              {elsewhere.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="link-draw">{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label leading-relaxed">
            University of California, Merced · 5200 N. Lake Rd, Merced, CA 95343
          </p>
          <p className="label">© {new Date().getFullYear()} EvoLab</p>
        </div>
      </div>
    </footer>
  )
}
