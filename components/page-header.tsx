import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  /** Optional actions rendered beneath the description. */
  children?: ReactNode
}

/**
 * Standard opening block for interior pages. Carries the top offset for the
 * fixed nav bar so pages don't each have to remember it.
 */
export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-foreground/10 pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-70"
        aria-hidden="true"
      />
      <div className="container relative pb-16 md:pb-24">
        <h1 className="max-w-4xl text-balance font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  )
}
