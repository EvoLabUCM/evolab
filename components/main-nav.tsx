import Link from "next/link"
import Image from "next/image"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-voYJYf0ta7Lq6hK3vdl0tyu2v7aJVf.png"
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
<Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
