import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { publicationCount, type ResearchArea } from "@/lib/research-areas"

interface ResearchGridProps {
  areas: readonly ResearchArea[]
}

export function ResearchGrid({ areas }: ResearchGridProps) {
  return (
    <div className="grid gap-px border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
      {areas.map((area) => {
        const Icon = area.icon
        const count = publicationCount(area.slug)

        return (
          <Link
            key={area.slug}
            href={area.href}
            className="group relative flex flex-col gap-5 bg-background p-7 transition-colors duration-500 hover:bg-surface md:p-8"
          >
            <span className="bracket pointer-events-none absolute inset-3" aria-hidden="true" />

            <Icon
              className="h-7 w-7 text-muted-foreground transition-colors duration-500 group-hover:text-primary"
              strokeWidth={1.25}
            />

            <h3 className="font-display text-3xl leading-tight transition-colors duration-300 group-hover:text-primary">
              {area.title}
            </h3>

            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {area.description}
            </p>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-foreground/10 pt-5">
              <span className="label tabular-nums">
                {count} {count === 1 ? "Paper" : "Papers"}
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
