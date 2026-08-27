import { PublicationList } from "@/components/publication-list"
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
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-glitch">
                Publications
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Browse our complete collection of research publications
              </p>
              <div className="flex justify-center mt-6">
                <Button variant="outline" size="lg" className="flex items-center gap-2" asChild>
                  <a
                    href="https://scholar.google.com/citations?user=uYopsrAAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <BookOpen className="h-5 w-5" />
                    View Google Scholar Profile
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <PublicationList publications={uniquePublications} />
          </div>
        </div>
      </section>
    </main>
  )
}
