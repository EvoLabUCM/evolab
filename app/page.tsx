import { TechnologyGrid } from "@/components/technology-grid"
import { ResearchAreaCard } from "@/components/research-area-card"
import { researchAreas } from "@/lib/research-areas"
import { NeuralNetworkBackdrop } from "@/components/neural-network-backdrop"
import { RecentPublications } from "@/components/recent-publications"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative w-full overflow-hidden pt-4 pb-12 md:pt-6 md:pb-20 lg:pt-8 lg:pb-28">
        <NeuralNetworkBackdrop />
        <div className="relative container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4 max-w-3xl">
              <Image
                src="\images\Stay_Human_Text.png"
                alt="Stay Human"
                width={400}
                height={400}
                className="mx-auto"
              />
              <p className="mx-auto max-w-[800px] text-xl md:text-2xl text-[#3b3183]">
                Human-Robot Interaction focused research lab at UC Merced. 
                We use humanoid robots, virtual reality, and fNIRS neuroimaging to study how people give trust to artificial intelligence, and what it costs when they give too much.
              </p>
            </div>
            <div className="space-x-4 pt-4">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 border-[#2d3871] bg-white text-[#2d3871] shadow-[4px_4px_0_0_#ffce42] transition-all hover:bg-white hover:text-[#2d3871] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#ffce42]"
                asChild
              >
                <Link href="/research">Our Research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-[#2d3871] md:text-4xl">Our Research Areas</h2>
              <p className="mx-auto max-w-[700px] text-[#3b3183] md:text-xl">
                Explore our diverse research initiatives focused on understanding human-AI interactions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <ResearchAreaCard key={area.title} area={area} cta="Learn more" />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <RecentPublications />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-[#2d3871] md:text-4xl">Our Technology</h2>
              <p className="mx-auto max-w-[700px] text-[#3b3183] md:text-xl">
                Take a look at our state-of-the-art robots and equipment for our ongoing research
              </p>
            </div>
          </div>
          <div className="mt-12">
            <TechnologyGrid />
          </div>
        </div>
      </section>
    </main>
  )
}
