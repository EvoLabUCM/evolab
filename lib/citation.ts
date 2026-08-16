export interface Publication {
  citation: string
  link?: string
  year: number
}

export interface ParsedCitation {
  authors: string
  /** Year as printed in the citation, e.g. "2024" or "2024, June 24". */
  printedYear: string
  title: string
  /** Journal, proceedings, or preprint server, plus volume and pages. */
  source: string
}

const APA = /^(.*?)\s*\((\d{4}[^)]*)\)\.\s*(.*)$/

/**
 * Splits an APA-style citation into its parts so the UI can typeset a title
 * differently from its authors and venue. Falls back to treating the whole
 * string as the title when the shape isn't recognised — no citation is ever
 * dropped or truncated.
 */
export function parseCitation(citation: string): ParsedCitation {
  const match = citation.match(APA)
  if (!match) {
    return { authors: "", printedYear: "", title: citation, source: "" }
  }

  const [, authors, printedYear, rest] = match

  // The title runs up to the first sentence-ending period. Titles here do
  // contain periods inside parentheticals, but not followed by a space.
  const breakAt = rest.search(/\.\s/)
  if (breakAt === -1) {
    return {
      authors,
      printedYear,
      title: rest.replace(/\.$/, ""),
      source: "",
    }
  }

  return {
    authors,
    printedYear,
    title: rest.slice(0, breakAt),
    source: rest.slice(breakAt + 1).trim(),
  }
}

/** Every publication across all categories, de-duplicated and newest first. */
export function flattenPublications(
  categories: Record<string, { publications: readonly Publication[] }>,
): Publication[] {
  const seen = new Set<string>()

  return Object.values(categories)
    .flatMap((category) => category.publications)
    .filter((publication) => {
      if (seen.has(publication.citation)) return false
      seen.add(publication.citation)
      return true
    })
    .sort((a, b) => b.year - a.year)
}
