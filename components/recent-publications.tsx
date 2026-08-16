import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { researchCategories } from "@/lib/publications"
import { flattenPublications, parseCitation } from "@/lib/citation"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const SCHOLAR_URL = "https://scholar.google.com/citations?user=uYopsrAAAAAJ&hl=en"

export function RecentPublications() {
  const recent = flattenPublications(researchCategories).slice(0, 4)

  return (
    <>
      <SectionHeading
        title="Recent work"
        description="Peer-reviewed findings from the lab and its collaborators, most recent first."
        action={
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/publications"
              className="group inline-flex items-center gap-2 border-b border-foreground/25 pb-2 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              All publications
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-b border-transparent pb-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Google Scholar
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        }
      />

      <Reveal className="mt-16">
        <ol className="border-t border-foreground/10">
          {recent.map((publication) => {
            const { authors, title, source } = parseCitation(publication.citation)
            const Wrapper = publication.link ? "a" : "div"

            return (
              <li key={publication.citation} className="border-b border-foreground/10">
                <Wrapper
                  {...(publication.link
                    ? {
                        href: publication.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="group grid gap-4 py-8 transition-colors md:grid-cols-12 md:gap-8"
                >
                  <div className="flex items-center gap-4 md:col-span-2 md:block">
                    <span className="label-gold tabular-nums">{publication.year}</span>
                  </div>

                  <div className="space-y-3 md:col-span-9">
                    <h3 className="text-balance font-display text-2xl leading-snug transition-colors group-hover:text-primary md:text-3xl">
                      {title}
                    </h3>
                    {authors && (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {authors}
                      </p>
                    )}
                    {source && (
                      <p className="text-xs leading-relaxed text-foreground/60">
                        {source}
                      </p>
                    )}
                  </div>

                  {publication.link && (
                    <div className="flex items-start md:col-span-1 md:justify-end">
                      <span className="inline-flex h-9 w-9 items-center justify-center border border-foreground/15 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">Read the paper</span>
                      </span>
                    </div>
                  )}
                </Wrapper>
              </li>
            )
          })}
        </ol>
      </Reveal>
    </>
  )
}
