export interface Person {
  name: string
  role: string
  image: string
  description: string
  portfolioUrl?: string
  cvUrl?: string
  expectedGraduation?: string
}

export interface PeopleGroup {
  id: string
  title: string
  /** Renders a single wide card rather than a grid. */
  featured?: boolean
  members: readonly Person[]
}

const PLACEHOLDER_IMAGE = "/images/placeholder.png"

/**
 * NOTE: several bios below are still placeholder text carried over from the
 * original build (search for "....."). Replace them — and swap
 * `/images/placeholder.png` for real headshots — as they come in. Cards fall
 * back to a typographic monogram wherever a photo is missing.
 */
export const peopleGroups: readonly PeopleGroup[] = [
  {
    id: "principal-investigator",
    title: "Principal Investigator",
    featured: true,
    members: [
      {
        name: "Dr. Colin Holbrook",
        role: "Principal Investigator",
        image: PLACEHOLDER_IMAGE,
        description:
          "Dr. Holbrook is an Associate Professor of Cognitive and Information Sciences at UC Merced, leading research in human-AI interaction and trust during crisis situations. His work spans multiple disciplines including cognitive science, psychology, and artificial intelligence, with particular emphasis on understanding how humans assess and respond to threats in crisis situations. His current research primarily concerns human-AI interaction during crises, investigating how humans interact with and trust artificial intelligence systems in critical situations.",
        portfolioUrl: "http://colinholbrook.com",
        cvUrl: "http://colinholbrook.com/Colin_Holbrook_Curriculum_Vitae.pdf",
      },
    ],
  },
  {
    id: "graduate-students",
    title: "Graduate Students",
    members: [
      {
        name: "Daniel",
        role: "Graduate Student",
        image: PLACEHOLDER_IMAGE,
        // TODO: replace placeholder bio
        description: "Daniel's research focuses on ........ He is currently investigating ..........",
        portfolioUrl: "http://colinholbrook.com",
      },
      {
        name: "Kaylee Davis",
        role: "Graduate Student",
        image: PLACEHOLDER_IMAGE,
        // TODO: replace placeholder bio
        description: "Kaylee studies ........... Her current project examines ............",
        portfolioUrl: "http://colinholbrook.com",
      },
    ],
  },
  {
    id: "lab-manager",
    title: "Lab Manager",
    featured: true,
    members: [
      {
        name: "Kahilan Skiba",
        role: "Lab Manager",
        image: PLACEHOLDER_IMAGE,
        // TODO: complete the final sentence of this bio
        description:
          "Kahilan oversees the day-to-day operations of the lab, coordinates research activities, and manages the lab's equipment and resources. She also contributes to research on ......",
        portfolioUrl: "http://colinholbrook.com",
      },
    ],
  },
  {
    id: "incoming-lab-manager",
    title: "Incoming Lab Manager",
    featured: true,
    members: [
      {
        name: 'Isabel "Vic" Chen',
        role: "RA, Video Team Lead, Future Lab Manager",
        image: PLACEHOLDER_IMAGE,
        description:
          "Hey! I'm Vic, I'm a UCM Psychology major with an interest in a mix of clinical and research work, and an aspiring clinical psychologist hopefully specializing in cognitive behavioral therapy. I also consider myself a creative, as an enjoyer of art, writing, and music!",
        expectedGraduation: "2026",
      },
    ],
  },
  {
    id: "team-leads",
    title: "Team Leads",
    members: [
      {
        name: "Katherine Herrera",
        role: "Personas Team Lead",
        image: PLACEHOLDER_IMAGE,
        description:
          "Katherine is a Cognitive Science major primarily interested in HRI research intended to help advance AI for the benefit of society.",
        expectedGraduation: "2025",
      },
    ],
  },
  {
    id: "undergraduate-researchers",
    title: "Undergraduate Researchers",
    members: [
      {
        name: "Jasmine Lau",
        role: "Research Assistant",
        image: PLACEHOLDER_IMAGE,
        description:
          "Hello! I am a Computer Science and Engineering major and Cognitive Science minor interested in design and artificial intelligence development.",
        portfolioUrl: "https://github.com/jasmine-g-lau",
        expectedGraduation: "2026",
      },
      {
        name: "Alex Ragde",
        role: "Research Assistant",
        image: PLACEHOLDER_IMAGE,
        description:
          "Alex Ragde is a fourth-year psychology major at the University of California, Merced, originally from Santa Clarita, CA. Expected to graduate in Spring 2025, Alex works as an undergraduate research assistant with Dr. Heather Bortfeld and Dr. Kristina Backer, contributing to studies involving bilingual and monolingual participants. He is currently engaged in functional near-infrared spectroscopy (fNIRS) research examining brain activity and working memory during visual processing.\n\nAlex's research interests center on the cognitive and perceptual mechanisms underlying learning and communication, including literacy outcomes, the visual word form area (VWFA), neuropsychology, visual psychology, and human factors psychology. He is particularly passionate about exploring how these domains intersect to influence behavior, emotions, and communication.\n\nAfter completing his undergraduate studies, Alex plans to pursue a PhD in neuropsychology, with the goal of advancing research that enhances human-environment interaction, promotes learning, and informs human-centered engineering. In his free time, he enjoys playing bass and guitar and spending time with friends and family.",
        expectedGraduation: "Spring 2025",
      },
      {
        name: "Pranav Yadav",
        role: "Research Assistant",
        image: PLACEHOLDER_IMAGE,
        description:
          "Hello! I'm Pranav, a CSE major at UC Merced. I have a strong focus in AI/ML as well as full-stack development for web and apps. I'm here to learn about the interactions between humans, robots, and artificial intelligence models.",
        portfolioUrl: "https://www.linkedin.com/in/pranavyadav99/",
        expectedGraduation: "2027",
      },
      {
        name: "Zoya Chaudhry",
        role: "Research Assistant",
        image: PLACEHOLDER_IMAGE,
        description: "Music Cognition & User Experience Research",
        expectedGraduation: "2026",
      },
      {
        name: "Aryaan Mishra",
        role: "Undergraduate Researcher",
        image: PLACEHOLDER_IMAGE,
        description:
          "Aryaan specializes in developing experimental software for the lab's research projects. He is currently working on a virtual reality simulation for studying human-AI interaction in crisis scenarios.",
        portfolioUrl: "http://colinholbrook.com",
      },
      {
        name: "Kat",
        role: "Undergraduate Researcher",
        image: PLACEHOLDER_IMAGE,
        // TODO: replace placeholder bio (also references the wrong name)
        description: "Sophia assists with ....... She is particularly interested in .............",
        portfolioUrl: "http://colinholbrook.com",
      },
    ],
  },
] as const

/** Everyone, flattened — used for the headcount in the page header. */
export const peopleCount = peopleGroups.reduce(
  (total, group) => total + group.members.length,
  0,
)

/** Initials for the monogram fallback, e.g. 'Dr. Colin Holbrook' -> "CH". */
export function initialsOf(name: string): string {
  const words = name
    .replace(/^(Dr|Prof|Mr|Ms|Mrs)\.?\s+/i, "")
    .replace(/["']/g, "")
    .split(/\s+/)
    .filter(Boolean)

  if (words.length === 0) return "?"
  // A mononym gets one letter — "DA" for "Daniel" reads as two initials.
  if (words.length === 1) return words[0][0].toUpperCase()

  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

export function hasPhoto(image: string): boolean {
  return Boolean(image) && !image.includes("placeholder")
}
