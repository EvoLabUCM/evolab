import type { Metadata } from "next"
import { ArrowUpRight, Newspaper, Radio, Video } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Reveal } from "@/components/reveal"
import { pressCoverage, type PressType } from "@/lib/press"

export const metadata: Metadata = {
  title: "Media",
  description:
    "Press coverage of EvoLab research in The New York Times, The Atlantic, Science, CNN, The Guardian, NPR, and elsewhere.",
}

const typeIcon: Record<PressType, typeof Newspaper> = {
  article: Newspaper,
  podcast: Radio,
  radio: Radio,
  video: Video,
}

const typeLabel: Record<PressType, string> = {
  article: "Article",
  podcast: "Podcast",
  radio: "Broadcast",
  video: "Video",
}

export default function MediaPage() {
  return (
    <main id="main" className="flex-1">
      <PageHeader
        title="In the press"
        description="Selected coverage of the lab's research from human-robot overtrust to threat appraisal, disgust, and coalitional psychology."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <ol className="border-t border-foreground/10">
              {pressCoverage.map((item) => {
                const Icon = typeIcon[item.type]

                return (
                  <li key={item.link} className="border-b border-foreground/10">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8"
                    >
                      <div className="flex items-center gap-3 md:col-span-3 md:flex-col md:items-start md:gap-3">
                        <span className="label-gold">{item.publication}</span>
                        <span className="label">{item.date}</span>
                      </div>

                      <div className="space-y-3 md:col-span-8">
                        <h2 className="text-balance font-display text-2xl leading-snug transition-colors group-hover:text-primary md:text-3xl">
                          {item.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <span className="text-sm text-muted-foreground">
                            {item.author}
                          </span>
                          <span
                            className="inline-flex items-center gap-1.5 border border-foreground/15 px-2 py-1"
                            title={typeLabel[item.type]}
                          >
                            <Icon className="h-3 w-3 text-muted-foreground" />
                            <span className="label">{typeLabel[item.type]}</span>
                          </span>
                          {item.note && (
                            <span className="text-sm italic text-muted-foreground">
                              {item.note}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start md:col-span-1 md:justify-end">
                        <span className="inline-flex h-9 w-9 items-center justify-center border border-foreground/15 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">Read at {item.publication}</span>
                        </span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ol>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
