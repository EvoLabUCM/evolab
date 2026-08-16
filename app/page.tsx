import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Hero } from "@/components/hero"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ResearchGrid } from "@/components/research-grid"
import { Instruments } from "@/components/instruments"
import { RecentPublications } from "@/components/recent-publications"
import { researchAreas } from "@/lib/research-areas"

const AMECA_BROLL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ameca%20Humanoid%20Robot%20AI%20Platform-w6ggiGZO8cCV74LJAppMeNb8Z0OErW.mp4"

export default function Home() {
  return (
    <>
      <Hero videoUrl={AMECA_BROLL} />

      <main id="main" className="flex-1">
        {/* Our purpose (A little about the lab, our philosophy, and what we do)*/}
        <section className="relative overflow-hidden border-t border-foreground/10 py-24 md:py-32">
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-60"
            aria-hidden="true"
          />
          <div className="container relative">
            <Reveal>
              <p className="text-pretty font-display text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
                Machines are getting better at seeming certain,
                <br />
                and people are becoming certain in blindly trusting their word.
              </p>


              <div className="mt-10 grid gap-x-12 gap-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:grid-cols-2 lg:gap-x-20">
                <p>
                  EvoLab studies the moments where a person hands judgment over to an
                  artificial agent — in an evacuation, under threat, or for a
                  decision that carries moral weight. In the age of AI where chatbots replace
                  search engines for many, the recognization of this blind trust is more necessary than ever.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/*Research areas */}
        <section className="relative border-t border-foreground/10 py-24 md:py-32">
          <div className="container">
            <SectionHeading
              title="What we study"
              description="Dr. Holbrook and his lab has covered six threads running from evolutionary and social cognition into human-robot interaction, many of which have intersected with our relationship with AI."
              action={
                <Link
                  href="/research"
                  className="group inline-flex items-center gap-2 border-b border-foreground/25 pb-2 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  All research areas
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              }
            />

            <Reveal className="mt-16">
              <ResearchGrid areas={researchAreas} />
            </Reveal>
          </div>
        </section>

        {/*Recent publications */}
        <section className="relative border-t border-foreground/10 py-24 md:py-32">
          <div className="container">
            <RecentPublications />
          </div>
        </section>

        {/* 03 — Instruments */}
        <Instruments />
      </main>
    </>
  )
}
