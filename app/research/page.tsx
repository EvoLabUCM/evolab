import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ResearchGrid } from "@/components/research-grid"
import { Reveal } from "@/components/reveal"
import { researchAreas } from "@/lib/research-areas"

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research areas at EvoLab: human-AI interaction and overtrust, emotion, group bias, threat appraisal, morality, and religion.",
}

export default function ResearchPage() {
  return (
    <main id="main" className="flex-1">
      <PageHeader
        title="What we study"
        description="Our work runs from evolutionary and social cognition into human-robot interaction. Each area below collects the peer-reviewed work behind it."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <ResearchGrid areas={researchAreas} />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
