"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  /** Stagger delay in milliseconds. */
  delay?: number
  className?: string
}

/** If the observer has said nothing by now, assume it never will. */
const OBSERVER_WATCHDOG_MS = 1500

/**
 * Fades and lifts its children into view the first time they enter the
 * viewport.
 *
 * Content must never be permanently invisible, so visibility is decided three
 * ways and any one of them is enough:
 *
 *   1. Anything already within the viewport at mount is shown synchronously.
 *   2. IntersectionObserver reveals the rest as they scroll in.
 *   3. A watchdog reveals everything if the observer never reports at all
 *      (unsupported, or a page that is never composited).
 *
 * `prefers-reduced-motion` drops the transition in globals.css, and a
 * `<noscript>` rule in the root layout unhides everything without scripting.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // 1. Already on screen — no need to wait for anything.
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true)
      return
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }

    let reported = false

    // 2. NOTE: the threshold MUST stay 0. A fractional threshold is a share of
    // the element's own height, so anything taller than the viewport — the
    // publications list runs past 18,000px — can never satisfy it, leaving the
    // content invisible (but still clickable) forever.
    const observer = new IntersectionObserver(
      ([entry]) => {
        reported = true
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(node)

    // 3. The observer always delivers an initial callback for an observed
    // element. Silence means it isn't running, so stop hiding the content.
    const watchdog = window.setTimeout(() => {
      if (!reported) setIsVisible(true)
    }, OBSERVER_WATCHDOG_MS)

    return () => {
      observer.disconnect()
      window.clearTimeout(watchdog)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      data-visible={isVisible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
