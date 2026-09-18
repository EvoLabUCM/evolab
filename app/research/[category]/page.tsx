import { notFound } from "next/navigation"
import { PublicationList } from "@/components/publication-list"
import { NeuralNetworkBackdrop } from "@/components/neural-network-backdrop"
import { researchCategories } from "@/lib/publications"

export async function generateStaticParams() {
  return Object.keys(researchCategories).map((category) => ({
    category,
  }))
}

export default async function ResearchCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params
  const category = researchCategories[slug as keyof typeof researchCategories]

  if (!category) {
    notFound()
  }

  return (
    <main className="flex-1">
      <section className="relative w-full overflow-hidden pt-4 pb-10 md:pt-6 md:pb-14 lg:pt-8 lg:pb-16">
        <NeuralNetworkBackdrop />
        <div className="relative container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter text-[#2d3871] sm:text-4xl md:text-5xl lg:text-6xl/none">
                {category.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-[#3b3183] md:text-xl">{category.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <div className="container px-4 md:px-6">
          {category.publications.length > 0 ? (
            <PublicationList publications={category.publications} />
          ) : (
            <p className="mx-auto max-w-[700px] rounded-xl border-2 border-dashed border-[#2d3871] bg-white p-8 text-center text-[#3b3183]">
              Publications for this area are coming soon.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
