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
    title: "Social Connection",
    description: "Text Here.",
    icon: HeartHandshake,
    href: "/research/social-connection",
  },
]

/** The remaining areas, shown as compact cards beneath the main three */
export const secondaryResearchAreas: ResearchArea[] = [
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
    description: "Miscellaneous",
    icon: Plus,
    href: "/research/other",
  },
]

/** Every area, in display order. */
export const allResearchAreas: ResearchArea[] = [...primaryResearchAreas, ...secondaryResearchAreas]
