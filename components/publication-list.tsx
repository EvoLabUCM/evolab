"use client"

import { ArrowUpRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { parseCitation, type Publication } from "@/lib/citation"

interface PublicationListProps {
  publications: readonly Publication[]
}

function groupByYear(publications: readonly Publication[]): [number, Publication[]][] {
  const byYear = new Map<number, Publication[]>()

  for (const publication of publications) {
    const bucket = byYear.get(publication.year)
    if (bucket) {
      bucket.push(publication)
    } else {
      byYear.set(publication.year, [publication])
    }
  }

  return [...byYear.entries()].sort(([a], [b]) => b - a)
}

function PublicationRow({ publication }: { publication: Publication }) {
  const { authors, title, source } = parseCitation(publication.citation)

  if (!publication.link) {
    return (
      <div className="grid gap-2 py-6 md:grid-cols-12 md:gap-8">
        <div className="space-y-2 md:col-span-11">
          <h4 className="text-balance font-display text-xl leading-snug md:text-2xl">
            {title}
          </h4>
          {authors && (
            <p className="text-sm leading-relaxed text-muted-foreground">{authors}</p>
          )}
          {source && (
            <p className="text-xs leading-relaxed text-foreground/60">{source}</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <a
      href={publication.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid gap-2 py-6 md:grid-cols-12 md:gap-8"
    >
      <div className="space-y-2 md:col-span-11">
        <h4 className="text-balance font-display text-xl leading-snug transition-colors group-hover:text-primary md:text-2xl">
          {title}
        </h4>
        {authors && (
          <p className="text-sm leading-relaxed text-muted-foreground">{authors}</p>
        )}
        {source && (
          <p className="text-xs leading-relaxed text-foreground/60">{source}</p>
        )}
      </div>
      <div className="flex items-start md:col-span-1 md:justify-end">
        <span className="inline-flex h-9 w-9 items-center justify-center border border-foreground/15 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
          <ArrowUpRight className="h-4 w-4" />
          <span className="sr-only">Read the paper</span>
        </span>
      </div>
    </a>
  )
}

export function PublicationList({ publications }: PublicationListProps) {
  const years = groupByYear(publications)

  // Every year starts open: Radix unmounts collapsed content, so anything
  // closed by default would be missing from the served HTML entirely.
  return (
    <Accordion
      type="multiple"
      defaultValue={years.map(([year]) => String(year))}
      className="w-full border-t border-foreground/10"
    >
      {years.map(([year, yearPublications]) => (
        <AccordionItem
          key={year}
          value={String(year)}
          className="border-b border-foreground/10"
        >
          <AccordionTrigger className="group py-6 hover:no-underline">
            <span className="flex flex-1 items-baseline gap-5 text-left">
              <span className="font-display text-4xl leading-none tabular-nums transition-colors group-hover:text-primary md:text-5xl">
                {year}
              </span>
              <span className="label tabular-nums">
                {yearPublications.length}{" "}
                {yearPublications.length === 1 ? "Paper" : "Papers"}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="divide-y divide-foreground/5 border-t border-foreground/5">
              {yearPublications.map((publication) => (
                <PublicationRow key={publication.citation} publication={publication} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
