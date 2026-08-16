import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  /** Serif headline — the human voice. */
  title: ReactNode
  description?: string
  /** Right-aligned slot for actions such as "View all". */
  action?: ReactNode
  className?: string
}

export function SectionHeading({
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4">
          <h2 className="font-display text-4xl text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  )
}
