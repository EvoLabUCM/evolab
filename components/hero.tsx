"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  videoUrl: string
}

/** The opening seconds of the clip are dead air, so skip past them. */
const START_AT_SECONDS = 8

/**
 * Full-viewport opening. The Ameca b-roll runs silently behind a measured scrim
 * so the robot stays legible, framed by calibration brackets, with the Stay
 * Human wordmark held at the centre.
 */
export function Hero({ videoUrl }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Guard the offset so a shorter replacement clip can't strand the element
    // past its own end.
    const canSkip = () => video.duration > START_AT_SECONDS

    // The `autoPlay` attribute would start playback before this effect could
    // seek, showing a beat of the opening frames first. Playback is started
    // here instead, only once the position is set.
    const start = () => {
      if (canSkip() && video.currentTime < START_AT_SECONDS) {
        video.currentTime = START_AT_SECONDS
      }
      // Autoplay can still be refused (low-power mode, data saver). The frame
      // reads as a still, so a failure here is non-fatal.
      video.play().catch(() => {})
    }

    // `loop` would restart at zero, so the repeat is driven by hand.
    const restart = () => {
      if (canSkip()) video.currentTime = START_AT_SECONDS
      video.play().catch(() => {})
    }

    if (video.readyState >= 1) start()
    else video.addEventListener("loadedmetadata", start)

    video.addEventListener("ended", restart)

    const raf = requestAnimationFrame(() => setHasEntered(true))
    return () => {
      cancelAnimationFrame(raf)
      video.removeEventListener("loadedmetadata", start)
      video.removeEventListener("ended", restart)
    }
  }, [])

  return (
    <section className="relative isolate flex h-[100svh] min-h-[620px] w-full flex-col justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        {/* The media fragment makes the first painted frame the one at 8s, so
            frame zero is never shown even before the effect runs. */}
        <source src={`${videoUrl}#t=${START_AT_SECONDS}`} type="video/mp4" />
      </video>

      {/* Scrims: flat knockdown, vertical fade into the page, then a vignette.
          These compound, so the flat layer sits below the target and the stack
          lands around 50% at the centre of frame — dark enough for the text,
          light enough to actually read Ameca's face. */}
      <div className="absolute inset-0 -z-10 bg-background/35" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/15 to-background"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 75% 60% at 50% 45%, transparent 0%, hsl(var(--background) / 0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Instrument sweep. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent motion-safe:animate-scan-down"
        aria-hidden="true"
      />

      {/* Calibration brackets. */}
      <div className="pointer-events-none absolute inset-5 md:inset-8" aria-hidden="true">
        <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-primary/40" />
        <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-primary/40" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-primary/40" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary/40" />
      </div>

      <div className="container relative">
        <div
          className="mx-auto flex max-w-4xl flex-col items-center text-center transition-all duration-1000 ease-out"
          style={{
            opacity: hasEntered ? 1 : 0,
            transform: hasEntered ? "none" : "translateY(20px)",
          }}
        >
          <h1 className="w-full">
            <span className="sr-only">Stay Human</span>
            <Image
              src="/images/Stay Human.png"
              alt=""
              width={1440}
              height={317}
              priority
              sizes="(max-width: 768px) 88vw, 720px"
              className="mx-auto w-[88vw] max-w-[720px] drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
            />
          </h1>

          <span
            className="mt-10 block h-px w-24 bg-gradient-to-r from-transparent via-primary/70 to-transparent"
            aria-hidden="true"
          />

          <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-foreground/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.6)] sm:text-lg">
            EvoLab is a Human-Robot Interaction focused research lab at UC Merced.
            We use humanoid robots, virtual reality, and fNIRS neuroimaging to
            study how people give trust to artificial intelligence, and what it
            costs when they give too much.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/research"
              className="group inline-flex h-12 items-center gap-2.5 bg-primary px-7 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Our Research
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/people"
              className="inline-flex h-12 items-center gap-2.5 border border-foreground/25 bg-background/30 px-7 text-sm font-medium tracking-wide backdrop-blur-sm transition-colors hover:border-primary/60 hover:text-primary"
            >
              Meet the Lab
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
