import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { PublicationList } from "@/components/publication-list"
import { Reveal } from "@/components/reveal"
import { researchCategories } from "@/lib/publications"
import { flattenPublications } from "@/lib/citation"

const SCHOLAR_URL = "https://scholar.google.com/citations?user=uYopsrAAAAAJ&hl=en"

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed publications from EvoLab on human-AI interaction, trust and overtrust, threat appraisal, morality, and group cognition.",
}

export default function PublicationsPage() {
  const publications = flattenPublications(researchCategories)

  return (
    <main id="main" className="flex-1">
      <PageHeader
        title="Publications"
        description="The complete peer-reviewed record from the lab and its collaborators, grouped by year. Every entry links out to the paper where one is available."
      >
        <a
          href={SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-12 items-center gap-2.5 border border-foreground/25 px-6 text-sm font-medium tracking-wide transition-colors hover:border-primary hover:text-primary"
        >
          Google Scholar profile
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </PageHeader>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <PublicationList publications={publications} />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
