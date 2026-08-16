"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ChevronDown, FileText, GraduationCap } from "lucide-react"
import { hasPhoto, initialsOf, type Person } from "@/lib/people"
import { cn } from "@/lib/utils"

const BIO_COLLAPSE_THRESHOLD = 220

function Portrait({ person, className }: { person: Person; className?: string }) {
  if (hasPhoto(person.image)) {
    return (
      <div className={cn("relative overflow-hidden bg-surface", className)}>
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
          aria-hidden="true"
        />
      </div>
    )
  }

  // Typographic stand-in — reads as a deliberate plate rather than a missing image.
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface-raised to-background",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <span className="relative font-display text-6xl leading-none text-primary/80 transition-transform duration-700 group-hover:scale-105 md:text-7xl">
        {initialsOf(person.name)}
      </span>
    </div>
  )
}

function PersonLinks({ person }: { person: Person }) {
  if (!person.portfolioUrl && !person.cvUrl) return null

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
      {person.portfolioUrl && (
        <a
          href={person.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="link-draw">Portfolio</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </a>
      )}
      {person.cvUrl && (
        <a
          href={person.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <FileText className="h-3.5 w-3.5" />
          <span className="link-draw">Curriculum Vitae</span>
        </a>
      )}
    </div>
  )
}

function PersonMeta({ person }: { person: Person }) {
  return (
    <div className="space-y-2">
      <p className="label-gold">{person.role}</p>
      {person.expectedGraduation && (
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <GraduationCap className="h-3.5 w-3.5" />
          <span>Expected {person.expectedGraduation}</span>
        </p>
      )}
    </div>
  )
}

/** Wide layout used for the PI and the lab managers. */
export function FeaturedPersonCard({ person }: { person: Person }) {
  return (
    <article className="group grid gap-8 border border-foreground/10 bg-background p-6 transition-colors duration-500 hover:bg-surface md:grid-cols-12 md:gap-10 md:p-8">
      <Portrait person={person} className="aspect-square md:col-span-4 lg:col-span-3" />

      <div className="flex flex-col gap-5 md:col-span-8 lg:col-span-9">
        <div className="space-y-3">
          <h3 className="font-display text-4xl leading-none transition-colors group-hover:text-primary md:text-5xl">
            {person.name}
          </h3>
          <PersonMeta person={person} />
        </div>

        <p className="max-w-2xl whitespace-pre-line text-pretty text-sm leading-relaxed text-muted-foreground">
          {person.description}
        </p>

        <PersonLinks person={person} />
      </div>
    </article>
  )
}

export function PersonCard({ person }: { person: Person }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLongBio = person.description.length > BIO_COLLAPSE_THRESHOLD

  return (
    <article className="group flex h-full flex-col border border-foreground/10 bg-background transition-colors duration-500 hover:bg-surface">
      <Portrait person={person} className="aspect-[4/3]" />

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-3">
          <h3 className="font-display text-3xl leading-none transition-colors group-hover:text-primary">
            {person.name}
          </h3>
          <PersonMeta person={person} />
        </div>

        <p
          className={cn(
            "whitespace-pre-line text-pretty text-sm leading-relaxed text-muted-foreground",
            isLongBio && !isExpanded && "line-clamp-3",
          )}
        >
          {person.description}
        </p>

        {isLongBio && (
          <button
            type="button"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            aria-expanded={isExpanded}
            className="label inline-flex items-center gap-2 self-start transition-colors hover:text-primary"
          >
            {isExpanded ? "Less" : "Full bio"}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                isExpanded && "rotate-180",
              )}
            />
          </button>
        )}

        <div className="mt-auto">
          <PersonLinks person={person} />
        </div>
      </div>
    </article>
  )
}
