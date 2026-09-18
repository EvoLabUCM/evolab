import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { ResearchArea } from "@/lib/research-areas"

export function ResearchAreaCard({ area, cta }: { area: ResearchArea; cta: string }) {
  const Icon = area.icon

  return (
    <Link href={area.href} className="group">
      <Card className="h-full rounded-xl border-2 border-[#2d3871] bg-white shadow-[6px_6px_0_0_#ffce42] transition-all group-hover:translate-x-[3px] group-hover:translate-y-[3px] group-hover:shadow-[3px_3px_0_0_#ffce42]">
        <CardHeader className="space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2d3871] bg-[#ffce42]">
            <Icon className="h-6 w-6 text-[#2d3871]" />
          </div>
          <CardTitle className="text-[#2d3871]">{area.title}</CardTitle>
          <CardDescription className="text-base text-[#3b3183]">{area.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="flex items-center font-medium text-[#2d3871]">
            {cta}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

/** Compact variant **/
export function ResearchAreaMiniCard({ area, className }: { area: ResearchArea; className?: string }) {
  const Icon = area.icon

  return (
    <Link href={area.href} className={cn("group", className)}>
      <div className="flex h-full flex-col gap-2 rounded-xl border-2 border-[#2d3871] bg-white p-4 transition-colors group-hover:bg-[#fff8e1]">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#2d3871] bg-white">
            <Icon className="h-4 w-4 text-[#2d3871]" />
          </div>
          <h3 className="font-semibold leading-tight text-[#2d3871]">{area.title}</h3>
          <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#2d3871] transition-transform group-hover:translate-x-1" />
        </div>
        <p className="text-sm text-[#3b3183]">{area.description}</p>
      </div>
    </Link>
  )
}
