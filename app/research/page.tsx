import Link from "next/link"
import { ArrowRight, Brain, Heart, Users, Shield, Scale, Church, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const researchAreas = [
  {
    title: "Human-AI Interaction",
    description: "Studying how humans interact with and trust AI systems in various contexts.",
    icon: Brain,
    href: "/research/human-ai-interaction",
  },
  {
    title: "Emotion",
    description: "Investigating emotional responses and regulation in human-AI interactions.",
    icon: Heart,
    href: "/research/emotion",
  },
  {
    title: "Group Bias",
    description: "Examining biases in group dynamics and decision-making processes.",
    icon: Users,
    href: "/research/group-bias",
  },
  {
    title: "Threat Appraisal",
    description: "Analyzing how humans assess and respond to threats in crisis situations.",
    icon: Shield,
    href: "/research/threat-appraisal",
  },
  {
    title: "Morality",
    description: "Exploring moral decision-making and ethical considerations in AI interactions.",
    icon: Scale,
    href: "/research/morality",
  },
  {
    title: "Religion",
    description: "Investigating the intersection of religious beliefs and AI trust.",
    icon: Church,
    href: "/research/religion",
  },
  {
    title: "Other Research Areas",
    description: "Miscelenaous",
    icon: Plus,
    href: "/research/other",
  },
]

export default function ResearchPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-glitch">
                Research Areas
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our diverse research initiatives focused on understanding human-AI interactions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => {
              const Icon = area.icon
              return (
                <Link key={area.title} href={area.href} className="group">
                  <Card className="transition-colors hover:border-primary">
                    <CardHeader>
                      <Icon className="h-8 w-8 transition-colors group-hover:text-primary" />
                      <CardTitle>{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="flex items-center text-primary">
                        View Publications <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
