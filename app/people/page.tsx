import { PersonCard } from "@/components/person-card"

// Principal Investigator
const principalInvestigator = {
  name: "Dr. Colin Holbrook",
  role: "Principal Investigator",
  image: "/images/placeholder.png",
  description:
    "Dr. Holbrook is an Associate Professor of Cognitive and Information Sciences at UC Merced, leading research in human-AI interaction and trust during crisis situations. His work spans multiple disciplines including cognitive science, psychology, and artificial intelligence, with particular emphasis on understanding how humans assess and respond to threats in crisis situations. His current research primarily concerns human-AI interaction during crises, investigating how humans interact with and trust artificial intelligence systems in critical situations.",
  portfolioUrl: "http://colinholbrook.com",
  cvUrl: "http://colinholbrook.com/Colin_Holbrook_Curriculum_Vitae.pdf",
}

// Graduate Students
const graduateStudents = [
  {
    name: "Daniel",
    role: "Grad Student",
    image: "/images/placeholder.png",
    description: "Daniel's research focuses on ........ He is currently investigating ..........",
    portfolioUrl: "http://colinholbrook.com",
  },
  {
    name: "Kaylee Davis",
    role: "Grad Student",
    image: "/images/placeholder.png",
    description: "KAylee studies ........... Her current project examines ............",
    portfolioUrl: "http://colinholbrook.com",
  },
]

// Lab Manager
const labManager = {
  name: "Kahilan Skiba",
  role: "Lab Manager",
  image: "/images/placeholder.png",
  description:
    "Kahilan oversees the day-to-day operations of the lab, coordinates research activities, and manages the lab's equipment and resources. She also contributes to research on ......",
  portfolioUrl: "http://colinholbrook.com",
}

// Future Lab Manager
const futureLabManager = {
  name: 'Isabel "Vic" Chen',
  role: "RA, Video Team Lead, Future Lab Manager",
  image: "/images/placeholder.png",
  description:
    "Hey! I'm Vic, I'm a UCM Psychology major with an interest in a mix of clinical and research work, and an aspiring clinical psychologist hopefully specializing in cognitive behavioral therapy. I also consider myself a creative, as an enjoyer of art, writing, and music!",
  expectedGraduation: "2026",
}

// Team Leads
const teamLeads = [
  {
    name: "Katherine Herrera",
    role: "Personas Team Lead",
    image: "/images/placeholder.png",
    description:
      "Katherine is a Cognitive Science major primarily interested in HRI research intended to help advance AI for the benefit of society.",
    expectedGraduation: "2025",
  },
]

// Undergraduate Researchers
const undergraduateResearchers = [
  {
    name: "Jasmine Lau",
    role: "Research Assistant",
    image: "/images/placeholder.png",
    description:
      "Hello! I am a Computer Science and Engineering major and Cognitive Science minor interested in design and artificial intelligence development.",
    portfolioUrl: "https://github.com/jasmine-g-lau",
    expectedGraduation: "2026",
  },
  {
    name: "Alex Ragde",
    role: "Research Assistant",
    image: "/images/placeholder.png",
    description:
      "Alex Ragde is a fourth-year psychology major at the University of California, Merced, originally from Santa Clarita, CA. Expected to graduate in Spring 2025, Alex works as an undergraduate research assistant with Dr. Heather Bortfeld and Dr. Kristina Backer, contributing to studies involving bilingual and monolingual participants. He is currently engaged in functional near-infrared spectroscopy (fNIRS) research examining brain activity and working memory during visual processing.\n\nAlex's research interests center on the cognitive and perceptual mechanisms underlying learning and communication, including literacy outcomes, the visual word form area (VWFA), neuropsychology, visual psychology, and human factors psychology. He is particularly passionate about exploring how these domains intersect to influence behavior, emotions, and communication.\n\nAfter completing his undergraduate studies, Alex plans to pursue a PhD in neuropsychology, with the goal of advancing research that enhances human-environment interaction, promotes learning, and informs human-centered engineering. In his free time, he enjoys playing bass and guitar and spending time with friends and family.",
    expectedGraduation: "Spring 2025",
  },
  {
    name: "Pranav Yadav",
    role: "Research Assistant",
    image: "/images/placeholder.png",
    description:
      "Hello! I'm Pranav, a CSE major at UC Merced. I have a strong focus in AI/ML as well as full-stack development for web and apps. I'm here to learn about the interactions between humans, robots, and artificial intelligence models.",
    portfolioUrl: "https://www.linkedin.com/in/pranavyadav99/",
    expectedGraduation: "2027",
  },
  {
    name: "Zoya Chaudhry",
    role: "Research Assistant",
    image: "/images/placeholder.png",
    description: "Music Cognition & User Experience Research",
    expectedGraduation: "2026",
  },
  {
    name: "Aryaan Mishra",
    role: "Undergraduate Researcher",
    image: "/images/placeholder.png",
    description:
      "Aryaan specializes in developing experimental software for the lab's research projects. He is currently working on a virtual reality simulation for studying human-AI interaction in crisis scenarios.",
    portfolioUrl: "http://colinholbrook.com",
  },
  {
    name: "Kat",
    role: "Undergraduate Researcher",
    image: "/images/placeholder.png",
    description: "Sophia assists with ....... She is particularly interested in .............",
    portfolioUrl: "http://colinholbrook.com",
  },
]

export default function PeoplePage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Our Team</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Meet the researchers and scientists driving innovation in human-AI interaction studies
              </p>
            </div>
          </div>

          <div className="space-y-16 mt-16">
            {/* Principal Investigator */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight">Principal Investigator</h2>
              <div className="max-w-md mx-auto">
                <PersonCard {...principalInvestigator} />
              </div>
            </div>

            {/* Graduate Students */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight">Graduate Students</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {graduateStudents.map((student) => (
                  <PersonCard key={student.name} {...student} />
                ))}
              </div>
            </div>

            {/* Lab Manager */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight">Lab Manager</h2>
              <div className="max-w-md mx-auto">
                <PersonCard {...labManager} />
              </div>
            </div>

            {/* Future Lab Manager */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight">Future Lab Manager</h2>
              <div className="max-w-md mx-auto">
                <PersonCard {...futureLabManager} />
              </div>
            </div>

            {/* Team Leads */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight">Team Leads</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {teamLeads.map((lead) => (
                  <PersonCard key={lead.name} {...lead} />
                ))}
              </div>
            </div>

            {/* Undergraduate Researchers */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight">Undergraduate Researchers</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {undergraduateResearchers.map((researcher) => (
                  <PersonCard key={researcher.name} {...researcher} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
