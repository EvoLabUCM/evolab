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
    title: "AI Overtrust in Life-or-Death Decisions",
    description: "How prone to overtrust are we when the decision stakes are grave?",
    icon: Brain,
    href: "/research/human-ai-interaction",
  },
  {
    title: "Anthropomorphism and Perceptions of Robots",
    description: "How much does humanlike appearance influence human appraisals of robots?",
    icon: Heart,
    href: "/research/emotion",
  },
  {
    title: "AI and Social Emotions",
    description: "How vulnerable are we to social and emotional manipulation?",
    icon: HeartHandshake,
    href: "/research/social-connection",
  },
]

/** The remaining areas, shown as compact cards beneath the main three */
export const secondaryResearchAreas: ResearchArea[] = [
  {
    title: "Coalitional Threat Psychology",
    description: "Group dynamics and decision-making processes related to group conflict and violence stereotypes.",
    icon: Users,
    href: "/research/group-bias",
  },
  {
    title: "Threat Appraisal",
    description: "Analyzing how humans assess and respond to threats.",
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
    description: "Effects of .",
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
