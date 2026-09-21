import { NeuralNetworkBackdrop } from "@/components/neural-network-backdrop"
import { ResearchAreaCard, ResearchAreaMiniCard } from "@/components/research-area-card"
import { primaryResearchAreas, secondaryResearchAreas } from "@/lib/research-areas"

export default function ResearchPage() {
  return (
    <main className="flex-1">
      <section className="relative w-full overflow-hidden pt-4 pb-10 md:pt-6 md:pb-14 lg:pt-8 lg:pb-16">
        <NeuralNetworkBackdrop />
        <div className="relative container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter text-[#2d3871] sm:text-4xl md:text-5xl lg:text-6xl/none">
                Research Areas
              </h1>
              <p className="mx-auto max-w-[700px] text-[#3b3183] md:text-xl">
                Explore our diverse research initiatives focused on understanding human-AI interactions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {primaryResearchAreas.map((area) => (
              <ResearchAreaCard key={area.title} area={area} cta="View Publications" />
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-5xl space-y-6 md:mt-16">
            <h2 className="text-center text-2xl font-bold tracking-tight text-[#2d3871] md:text-2xl">
              Other research focuses of Dr. Holbrook
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {secondaryResearchAreas.map((area) => (
                <ResearchAreaMiniCard
                  key={area.title}
                  area={area}
                  className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
