import { Brain, Church, HeartHandshake, Heart, Plus, Scale, Shield, Users, type LucideIcon } from "lucide-react"

export type ResearchArea = {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

/** The three main areas, shown as featured cards */
export const primaryResearchAreas: ResearchArea[] = [
  {
    title: "Overtrust in Life-or-Death Decisions",
    description: "How prone are we to overtrust AI when the stakes are grave?",
    icon: Brain,
    href: "/research/human-ai-interaction",
  },
  {
    title: "Anthropomorphism and Social Psychology",
    description: "How does humanlike appearance shape perceptions of AI?",
    icon: Heart,
    href: "/research/emotion",
  },
  {
    title: "Social Emotions",
    description: "How vulnerable are we to social and emotional manipulation by AI companies?",
    icon: HeartHandshake,
    href: "/research/social-connection",
  },
]

/** The remaining areas, shown as compact cards beneath the main three */
export const secondaryResearchAreas: ResearchArea[] = [
  {
    title: "Coalitional Threat Psychology",
    description: "Group dynamics and decision-making processes related to violence.",
    icon: Users,
    href: "/research/group-bias",
  },
  {
    title: "Credulity",
    description: "The impact of factors such as political orientation, religiosity and negativity bias on willingness to believe false claims.",
    icon: Shield,
    href: "/research/threat-appraisal",
  },
  {
    title: "Morality",
    description: "Contextual determinants of moral intuitions.",
    icon: Scale,
    href: "/research/morality",
  },
  {
    title: "Supernatural Cognition",
    description: "Effects of supernatural concepts on judgment.",
    icon: Church,
    href: "/research/religion",
  },
  {
    title: "Emotion",
    description: "Effects of state emotion on cooperation and conflict.",
    icon: Plus,
    href: "/research/emotion",
  },
]

/** Every area, in display order. */
export const allResearchAreas: ResearchArea[] = [...primaryResearchAreas, ...secondaryResearchAreas]
