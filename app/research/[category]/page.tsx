import { notFound } from "next/navigation"
import { PublicationList } from "@/components/publication-list"
import { researchCategories } from "@/lib/publications"

export async function generateStaticParams() {
  return Object.keys(researchCategories).map((category) => ({
    category,
  }))
}

export default function ResearchCategoryPage({ params }: { params: { category: string } }) {
  const category = researchCategories[params.category as keyof typeof researchCategories]

  if (!category) {
    notFound()
  }

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-glitch">
                {category.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{category.description}</p>
            </div>
          </div>
          <div className="mt-16">
            <PublicationList publications={category.publications} />
          </div>
        </div>
      </section>
    </main>
  )
}
