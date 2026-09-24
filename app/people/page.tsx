import Image from "next/image"
import { withBasePath } from "@/lib/utils"
import { PersonCard } from "@/components/person-card"
import { NeuralNetworkBackdrop } from "@/components/neural-network-backdrop"

// Principal Investigator
const principalInvestigator = {
  name: "Dr. Colin Holbrook",
  role: "Principal Investigator",
  image: "/images/people/ColinHolbrook.jpg",
  description:
    "Dr. Holbrook is an Associate Professor of Cognitive and Information Sciences at UC Merced, leading research in human-AI interaction and trust during crisis situations. His work spans multiple disciplines including cognitive science, anthropology, psychology, and artificial intelligence, with particular emphasis on understanding how humans assess and respond to threats in crisis situations. His current research primarily concerns human-AI interaction during crises, investigating how humans interact with and trust artificial intelligence systems in critical situations.",
  portfolioUrl: "http://colinholbrook.com",
  cvUrl: "http://colinholbrook.com/Colin_Holbrook_Curriculum_Vitae.pdf",
}

// Lab Manager
const labManager = {
  name: "Pranav Yadav",
  role: "Lab Manager",
  image: "/images/people/Pranav.jpg",
  portfolioUrl: "http://pranu.dev"
}

// Graduate Students
const graduateStudents = [
  {name: "Kaylee Davis", role: "Graduate Student", image: "/images/placeholder.png"},
  { name: "Derrick Liu", role: "Graduate Student", image: "/images/people/Derrick.jpg", portfolioUrl: "https://theoderic.com/"},
  { name: "Julia Ton", role: "Graduate Student", image: "/images/people/Julia.jpg", portfolioUrl: "https://www.linkedin.com/in/julia-ton/"},
]

// Undergraduate Researchers
const undergraduateResearchers = [
  { name: "Sahana Veldandi", role: "Undergraduate Research Assistant", image: "/images/placeholder.png" },
  { name: "Alejandro Sigala", role: "Undergraduate Research Assistant", image: "/images/people/Alejandro.jpeg", portfolioUrl: "https://www.linkedin.com/in/alejandro-sigala-626b7236b" },
  { name: "Amanda Hicks", role: "Undergraduate Research Assistant", image: "/images/people/Amanda.jpg", portfolioUrl: "https://www.linkedin.com/in/amanda-hicks-0433b4434/" },
  { name: "Jayden Connolly", role: "Undergraduate Research Assistant", image: "/images/placeholder.png" },
  { name: "Jie Ru Chua", role: "Undergraduate Research Assistant", image: "/images/placeholder.png" },
  { name: "Jasmine Kaur", role: "Undergraduate Research Assistant", image: "/images/people/Jasmine.jpeg", portfolioUrl: "https://www.linkedin.com/in/jasmine-kaur-ucm/" },
  { name: "Ananya Narra", role: "Undergraduate Research Assistant", image: "/images/people/Ananya.jpeg" },
  { name: "Sofia Langer-Osuna", role: "Undergraduate Research Assistant", image: "/images/people/Sofia.jpg", portfolioUrl: "https://github.com/slangerosuna" },
  { name: "Kai Patel", role: "Undergraduate Research Assistant", image: "/images/people/Kai.jpg" },
]

// Previous Members — listed by name and the role they held, no photos
const previousMembers = [
  { name: "Kahilan Skiba", role: "Lab Manager" },
  { name: "Daniel", role: "Graduate Student" },
  { name: 'Isabel "Vic" Chen', role: "Lab Manager" },
  { name: "Katherine Herrera", role: "Personas Team Lead"},
  { name: "Jasmine Lau", role: "Undergraduate Research Assistant" },
  { name: "Alex Ragde", role: "Undergraduate Research Assistant" },
  { name: "Zoya Chaudhry", role: "Undergraduate Research Assistant" },
  { name: "Aryaan Mishra", role: "Robots & LLM Team Lead" },
]

export default function PeoplePage() {
  return (
    <main className="flex-1">
      <section className="relative w-full overflow-hidden pt-4 pb-10 md:pt-6 md:pb-14 lg:pt-8 lg:pb-16">
        <NeuralNetworkBackdrop />
        <div className="relative container px-4 md:px-6">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-3 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tighter text-[#2d3871] sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Team
              </h1>
              <p className="mx-auto max-w-[700px] text-[#3b3183] md:mx-0 md:text-xl">
                Meet the researchers and scientists driving innovation in human-AI interaction studies
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-xl border-2 border-[#2d3871] shadow-[6px_6px_0_0_#ffce42] md:ml-auto">
              <Image
                src={withBasePath("/images/Lab_Tabling.jpeg")}
                alt="Lab members operating our Go2 and Bunker robots at the UCM Cognitive Science outreach table during Bobcat Day 2025"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#2d3871]">Principal Investigator</h2>
              <div className="mx-auto max-w-md">
                <PersonCard {...principalInvestigator} />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#2d3871]">Lab Manager</h2>
              <div className="mx-auto max-w-md">
                <PersonCard {...labManager} />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#2d3871]">Graduate Students</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {graduateStudents.map((student) => (
                  <PersonCard key={student.name} {...student} />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#2d3871]">Undergraduate Researchers</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {undergraduateResearchers.map((researcher) => (
                  <PersonCard key={researcher.name} {...researcher} />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#2d3871]">Previous Members</h2>
              <ul className="max-w-2xl space-y-3">
                {previousMembers.map((member) => (
                  <li
                    key={member.name}
                    className="rounded-xl border-2 border-[#2d3871] bg-white px-4 py-3"
                  >
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <p className="font-semibold text-[#2d3871]">{member.name}</p>
                      <p className="text-sm text-[#3b3183]">{member.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
