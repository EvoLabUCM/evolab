import Image from "next/image"
import { instruments, type Instrument } from "@/lib/instruments"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

function InstrumentMedia({ instrument }: { instrument: Instrument }) {
  const overlay = (
    <>
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-secondary/20 mix-blend-color opacity-70 transition-opacity duration-700 group-hover:opacity-0"
        aria-hidden="true"
      />
    </>
  )

  if (instrument.media.type === "video") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden">
        <video
          className="h-full w-full scale-[1.02] object-cover transition-transform duration-1000 group-hover:scale-105"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={instrument.media.src} type="video/mp4" />
        </video>
        {overlay}
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={instrument.media.src}
        alt={instrument.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="scale-[1.02] object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      {overlay}
    </div>
  )
}

/**
 * Bento spans, keyed by instrument. These live here rather than in the data
 * module so Tailwind sees the literal class names, and so the data stays free
 * of layout concerns. On a six-column row the two humanoids take a half each,
 * and the remaining three platforms take a third each.
 */
const CARD_SPANS: Record<string, string> = {
  ameca: "md:col-span-2 lg:col-span-3",
  robothespian: "md:col-span-1 lg:col-span-3",
  bunker: "md:col-span-1 lg:col-span-2",
  "unitree-go-2": "md:col-span-1 lg:col-span-2",
  fnirs: "md:col-span-1 lg:col-span-2",
}

function InstrumentCard({ instrument }: { instrument: Instrument }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col bg-background transition-colors duration-500 hover:bg-surface",
        CARD_SPANS[instrument.id],
      )}
    >
      <span className="bracket pointer-events-none absolute inset-3 z-10" aria-hidden="true" />

      <InstrumentMedia instrument={instrument} />

      <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
        <div>
          <p className="label">{instrument.kind}</p>
          <h3 className="mt-3 font-display text-3xl leading-none transition-colors group-hover:text-primary md:text-4xl">
            {instrument.name}
          </h3>
        </div>

        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {instrument.description}
        </p>

        <dl className="mt-auto space-y-0 border-t border-foreground/10 pt-4">
          {instrument.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-baseline justify-between gap-4 border-b border-foreground/5 py-2 last:border-b-0"
            >
              <dt className="label shrink-0">{spec.label}</dt>
              <dd className="text-right text-xs leading-relaxed text-foreground/80">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}

export function Instruments() {
  return (
    <section className="relative border-t border-foreground/10 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          title="Our Technology"
          description="Our lab utilizes a variety of robots and instruments to conduct our experiments."
        />

        <Reveal className="mt-16">
          <div className="grid gap-px border border-foreground/10 bg-foreground/10 md:grid-cols-2 lg:grid-cols-6">
            {instruments.map((instrument) => (
              <InstrumentCard key={instrument.id} instrument={instrument} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
