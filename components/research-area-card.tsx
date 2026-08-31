import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
