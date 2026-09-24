import { PublicationList } from "@/components/publication-list"
import { NeuralNetworkBackdrop } from "@/components/neural-network-backdrop"
import { researchCategories } from "@/lib/publications"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen } from "lucide-react"

export default function PublicationsPage() {
  // Combine all publications from all categories and remove duplicates
  const allPublications = Object.values(researchCategories).reduce(
    (acc, category) => {
      return [...acc, ...category.publications]
    },
    [] as Array<{ citation: string; link?: string; year: number }>,
  )

  // Remove duplicates based on citation
  const uniquePublications = allPublications.filter(
    (publication, index, self) => index === self.findIndex((p) => p.citation === publication.citation),
  )

  return (
    <main className="flex-1">
      <section className="relative w-full overflow-hidden pt-4 pb-10 md:pt-6 md:pb-14 lg:pt-8 lg:pb-16">
        <NeuralNetworkBackdrop />
        <div className="relative container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter text-[#2d3871] sm:text-4xl md:text-5xl lg:text-6xl/none">
                Publications
              </h1>
              <p className="mx-auto max-w-[700px] text-[#3b3183] md:text-xl">
              </p>
              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  className="flex items-center gap-2 bg-[#ffce42] text-black hover:bg-[#ffce42]/90"
                  asChild
                >
                  <a
                    href="https://scholar.google.com/citations?user=uYopsrAAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="h-5 w-5" />
                    View Google Scholar Profile
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <div className="container px-4 md:px-6">
          <PublicationList publications={uniquePublications} />
        </div>
      </section>
    </main>
  )
}
