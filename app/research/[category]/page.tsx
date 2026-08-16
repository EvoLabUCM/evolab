import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { PublicationList } from "@/components/publication-list"
import { Reveal } from "@/components/reveal"
import { researchCategories } from "@/lib/publications"

type CategorySlug = keyof typeof researchCategories

export async function generateStaticParams() {
  return Object.keys(researchCategories).map((category) => ({ category }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category: slug } = await params
  const category = researchCategories[slug as CategorySlug]

  if (!category) return { title: "Research" }

  return { title: category.title, description: category.description }
}

// Next 16 hands `params` to page components as a Promise; reading it synchronously yields undefined and sends every category to notFound().
export default async function ResearchCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: slug } = await params
  const category = researchCategories[slug as CategorySlug]

  if (!category) {
    notFound()
  }

  return (
    <main id="main" className="flex-1">
      <PageHeader
        title={category.title}
        description={category.description}
      >
        <Link
          href="/research"
          className="group inline-flex items-center gap-2 border-b border-foreground/25 pb-2 text-sm transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          All research areas
        </Link>
      </PageHeader>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <PublicationList publications={category.publications} />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
