import { Brain, Church, Heart, Plus, Scale, Shield, Users, type LucideIcon } from "lucide-react"

export type ResearchArea = {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

/** The six core areas, as featured on the home page. */
export const researchAreas: ResearchArea[] = [
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
]

/** Every area, including the catch-all, as listed on the Research Areas page. */
export const allResearchAreas: ResearchArea[] = [
  ...researchAreas,
  {
    title: "Other Research Areas",
    description: "Miscelenaous",
    icon: Plus,
    href: "/research/other",
  },
]
