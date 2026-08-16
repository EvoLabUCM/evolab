import { Brain, Heart, Users, Shield, Scale, Church, type LucideIcon } from "lucide-react"
import { researchCategories } from "@/lib/publications"

export interface ResearchArea {
  /** Matches a key in `researchCategories`. */
  slug: keyof typeof researchCategories
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export const researchAreas: readonly ResearchArea[] = [
  {
    slug: "human-ai-interaction",
    title: "Human-AI Interaction",
    description:
      "How people read, rely on, and defer to artificial agents, and where that reliance tips over into overtrust.",
    icon: Brain,
    href: "/research/human-ai-interaction",
  },
  {
    slug: "emotion",
    title: "Emotion",
    description:
      "Emotional response and regulation during interaction with machines, measured behaviorally and neurally.",
    icon: Heart,
    href: "/research/emotion",
  },
  {
    slug: "group-bias",
    title: "Group Bias",
    description:
      "Coalitional psychology, intergroup perception, and how group membership shapes judgment under pressure.",
    icon: Users,
    href: "/research/group-bias",
  },
  {
    slug: "threat-appraisal",
    title: "Threat Appraisal",
    description:
      "How humans size up danger, and how those appraisals shift when an AI system offers guidance in a crisis.",
    icon: Shield,
    href: "/research/threat-appraisal",
  },
  {
    slug: "morality",
    title: "Morality",
    description:
      "Moral decision-making at the human-machine boundary, including deference to AI on high-stakes judgments.",
    icon: Scale,
    href: "/research/morality",
  },
  {
    slug: "religion",
    title: "Religion",
    description:
      "Religious cognition and belief, and their bearing on how people extend trust to agents both human and artificial.",
    icon: Church,
    href: "/research/religion",
  },
] as const

/** Number of publications filed under a research area. */
export function publicationCount(slug: ResearchArea["slug"]): number {
  return researchCategories[slug]?.publications.length ?? 0
}
