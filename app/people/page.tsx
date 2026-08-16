import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { FeaturedPersonCard, PersonCard } from "@/components/person-card"
import { Reveal } from "@/components/reveal"
import { peopleGroups } from "@/lib/people"

export const metadata: Metadata = {
  title: "People",
  description:
    "The researchers, graduate students, and undergraduate research assistants of EvoLab at UC Merced.",
}

export default function PeoplePage() {
  return (
    <main id="main" className="flex-1">
      <PageHeader
        title="The lab"
        description="Cognitive scientists, psychologists, and engineers running the studies — from the principal investigator through the undergraduate research assistants who make the work happen."
      />

      <section className="py-16 md:py-24">
        <div className="container space-y-20 md:space-y-28">
          {peopleGroups.map((group) => (
            <div key={group.id} className="space-y-10">
              <div className="flex items-center gap-4">
                <h2 className="label">{group.title}</h2>
                <span className="rule flex-1" aria-hidden="true" />
                <span className="label tabular-nums">
                  {group.members.length}{" "}
                  {group.members.length === 1 ? "member" : "members"}
                </span>
              </div>

              {group.featured ? (
                <div className="space-y-6">
                  {group.members.map((person) => (
                    <Reveal key={person.name}>
                      <FeaturedPersonCard person={person} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((person, index) => (
                    <Reveal key={person.name} delay={index * 60} className="h-full">
                      <PersonCard person={person} />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
