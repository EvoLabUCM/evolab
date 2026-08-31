"use client"
import { ExternalLink } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { PDFPreviewDialog } from "@/components/pdf-preview-dialog"
import { useState } from "react"

interface Publication {
  citation: string
  link?: string
  year: number
}

interface PublicationListProps {
  publications: Publication[]
}

export function PublicationList({ publications }: PublicationListProps) {
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null)

  // Sort years in descending order (newest to oldest)
  const publicationsByYear = publications.reduce(
    (acc, pub) => {
      const year = pub.year
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(pub)
      return acc
    },
    {} as Record<number, Publication[]>,
  )

  // Get years and sort them in descending order
  const sortedYears = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {sortedYears.map((year) => (
          <AccordionItem key={year} value={year.toString()} className="border rounded-lg bg-card/50 backdrop-blur-sm">
            <AccordionTrigger className="px-4 hover:no-underline">
              <h2 className="text-xl font-semibold">{year}</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-4 pb-4 space-y-4">
                {publicationsByYear[year].map((publication, index) => (
                  <div key={index} className="space-y-2">
                    <button
                      onClick={() => setSelectedPublication(publication)}
                      className="text-sm md:text-base text-left hover:text-primary transition-colors"
                    >
                      {publication.citation}
                    </button>
                    {publication.link && (
                      <Button variant="link" className="h-auto p-0" asChild>
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-primary/80"
                        >
                          View Publication <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <PDFPreviewDialog
        isOpen={!!selectedPublication}
        onClose={() => setSelectedPublication(null)}
        title={selectedPublication?.citation || ""}
      />
    </>
  )
}
