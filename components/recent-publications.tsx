"use client"

import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { researchCategories } from "@/lib/publications"

// APA citations read "Authors (Year). Title. Venue, vol." so splitting on the
// first period yields the lead author's initial, not the title.
function paperTitle(citation: string) {
  const match = citation.match(/\(\d{4}[^)]*\)\.\s*(.+?)\.\s/)
  return match ? `${match[1]}.` : citation
}

export function RecentPublications() {
  // Get all publications and sort by year in descending order (newest first)
  const allPublications = Object.values(researchCategories)
    .reduce(
      (acc, category) => {
        return [...acc, ...category.publications]
      },
      [] as Array<{ citation: string; link?: string; year: number }>,
    )
    .sort((a, b) => b.year - a.year)

  // Remove duplicates and get the 3 most recent
  const recentPublications = allPublications
    .filter((publication, index, self) => index === self.findIndex((p) => p.citation === publication.citation))
    .slice(0, 3)

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-[#2d3871] tracking-tight">Recent Publications</h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <Button size="sm" className="whitespace-nowrap bg-[#ffce42] text-black hover:bg-[#ffce42]/90" asChild>
            <Link href="/publications">View All Publications</Link>
          </Button>
          <Button size="sm" className="flex items-center gap-2 whitespace-nowrap bg-[#ffce42] text-black hover:bg-[#ffce42]/90" asChild>
            <a
              href="https://scholar.google.com/citations?user=uYopsrAAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Google Scholar
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recentPublications.map((publication, index) => (
          <Card key={index} className="flex flex-col rounded-xl border-2 border-[#2d3871] shadow-none">
            <CardHeader>
              <CardTitle className="line-clamp-3 text-base leading-snug text-[#2d3871] sm:text-lg">
                {paperTitle(publication.citation)}
              </CardTitle>
              <CardDescription className="text-sm font-medium text-[#3b3183]">
                Published in {publication.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="line-clamp-3 text-xs leading-relaxed text-[#3b3183] sm:text-sm">{publication.citation}</p>
              {publication.link && (
                <Button
                  variant="link"
                  className="mt-4 h-auto p-0"
                  asChild
                >
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Publication <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
