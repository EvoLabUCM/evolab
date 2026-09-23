import Link from "next/link"
import Image from "next/image"
import { withBasePath } from "@/lib/utils"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={withBasePath("/images/Stay_Human_NoText.png")}
            alt="Stay Human Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-bold text-white">
            STAY HUMAN LAB
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 overflow-x-auto md:overflow-visible">
          <Link href="/people" className="text-sm font-medium text-white/85 transition-colors hover:text-white whitespace-nowrap">
            People
          </Link>
          <Link href="/research" className="text-sm font-medium text-white/85 transition-colors hover:text-white whitespace-nowrap">
            Research
          </Link>
          <Link
            href="/publications"
            className="text-sm font-medium text-white/85 transition-colors hover:text-white whitespace-nowrap"
          >
            Publications
          </Link>
          <Link href="/media" className="text-sm font-medium text-white/85 transition-colors hover:text-white whitespace-nowrap">
            Media
          </Link>
        </nav>
      </div>
    </header>
  )
}
