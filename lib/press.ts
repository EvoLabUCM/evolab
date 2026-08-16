export type PressType = "article" | "podcast" | "radio" | "video"

export interface PressItem {
  title: string
  author: string
  publication: string
  date: string
  link: string
  type: PressType
  note?: string
}

/** Selected press coverage, newest first. */
export const pressCoverage: readonly PressItem[] = [
  {
    title: "Belief in God has been overwhelmingly linked with this specific behavior",
    author: "Plain, C.",
    publication: "The Debrief",
    date: "August 9, 2024",
    link: "https://thedebrief.org/belief-in-god-has-been-overwhelmingly-linked-with-this-specific-behavior/",
    type: "article",
  },
  {
    title:
      "Study on Black Lives Matter protests provides insight into the link between coalitional affiliation and moral elevation",
    author: "Dolan, E. W.",
    publication: "PsyPost",
    date: "May 26, 2023",
    link: "https://www.psypost.org/study-on-black-lives-matter-protests-provides-insight-into-the-link-between-coalitional-affiliation-and-moral-elevation/",
    type: "article",
  },
  {
    title: "Ever feel your skin crawling? Maybe you can thank evolution",
    author: "Imbler, S.",
    publication: "The New York Times",
    date: "July 27, 2021",
    link: "https://www.nytimes.com/2021/07/27/science/skin-crawling-itching-parasites.html",
    type: "article",
  },
  {
    title:
      "Do not read this at lunch: Scientists teased out a new dimension of disgust by showing people gross videos of rotting meat, bugs, and other very unappetizing prospects",
    author: "Wu, K. J.",
    publication: "The Atlantic",
    date: "July 27, 2021",
    link: "https://www.theatlantic.com/science/archive/2021/07/what-defines-disgust/619580/",
    type: "article",
  },
  {
    title:
      "Social scientists discover a dangerous truth about American politics hidden in new COVID-19 data",
    author: "Coffey, R.",
    publication: "Forbes",
    date: "July 8, 2021",
    link: "https://www.forbes.com/sites/rebeccacoffey/2021/07/08/social-scientists-discover-a-dangerous-truth-about-american-politics-hidden-in-new-covid-19-data/?sh=7b3ea0b4490f",
    type: "article",
  },
  {
    title: "America's partisan fireworks will be hard for anyone to put out",
    author: "Brownstein, R.",
    publication: "CNN",
    date: "July 6, 2021",
    link: "https://www.cnn.com/2021/07/05/politics/america-partisan-divisions-widen/index.html",
    type: "article",
  },
  {
    title: "Colin Holbrook: Threat, And Human-Robot Interaction (Part 1)",
    author: "Lopes, R.",
    publication: "The Dissenter",
    date: "June 22, 2020",
    link: "https://www.youtube.com/watch?v=XIocAsPszzc&feature=emb_logo",
    note: "Science podcast interview",
    type: "podcast",
  },
  {
    title: "When the mask you're wearing 'Tastes Like Socialism'",
    author: "Edsall, T.",
    publication: "The New York Times",
    date: "May 20, 2020",
    link: "https://www.nytimes.com/2020/05/20/opinion/coronavirus-trump-partisanship.html",
    type: "article",
  },
  {
    title: "Would you help a stranger? UCLA to study why people are kind or not",
    author: "Free, C.",
    publication: "The Washington Post",
    date: "October 30, 2019",
    link: "https://www.washingtonpost.com/lifestyle/2019/10/30/would-you-help-stranger-ucla-study-why-people-are-kind-or-not/",
    type: "article",
  },
  {
    title: "Negativity bias: Why conservatives are more swayed by threats than liberals",
    author: "Gjersoe, N.",
    publication: "The Guardian",
    date: "May 26, 2017",
    link: "https://www.theguardian.com/science/head-quarters/2017/may/26/negativity-bias-why-conservatives-are-more-swayed-by-threats-than-liberals",
    type: "article",
  },
  {
    title: "Are conservatives more scared of stuff than liberals?",
    author: "Singal, J.",
    publication: "New York Magazine",
    date: "February 3, 2017",
    link: "https://www.thecut.com/2017/02/are-conservatives-more-scared-of-stuff-than-liberals.html",
    type: "article",
  },
  {
    title:
      "Why conservatives are more likely than liberals to believe false information about threats",
    author: "Healy, M.",
    publication: "The Los Angeles Times",
    date: "February 2, 2017",
    link: "http://www.latimes.com/science/sciencenow/la-sci-sn-conservative-believe-false-threats-20170202-story.html",
    type: "article",
  },
  {
    title: "Why fake news targeted Trump supporters",
    author: "Khazan, O.",
    publication: "The Atlantic",
    date: "February 2, 2017",
    link: "https://www.theatlantic.com/science/archive/2017/02/why-fake-news-targeted-trump-supporters/515433/",
    type: "article",
  },
  {
    title:
      "Scientists find you can reduce peoples' belief in God by directing magnetic energy into the brain",
    author: "Horton, H.",
    publication: "The Telegraph",
    date: "October 16, 2015",
    link: "https://www.telegraph.co.uk/news/religion/11935492/scientists-reduce-belief-god-hostility-immigrants-magnets.html",
    type: "article",
  },
  {
    title: "Can magnets change your beliefs?",
    author: "Newsday",
    publication: "BBC World Service",
    date: "October 15, 2015",
    link: "http://www.bbc.co.uk/programmes/p0358ndn",
    type: "radio",
  },
  {
    title: "New study confirms depressing truth about names and racial bias",
    author: "Howard, J.",
    publication: "Huffington Post",
    date: "October 8, 2015",
    link: "http://www.huffingtonpost.com/entry/black-sounding-names-study_561697a5e4b0dbb8000d687f",
    type: "article",
  },
  {
    title: "Can a person's name influence racial bias?",
    author: "Olney, W.",
    publication: "National Public Radio",
    date: "October 7, 2015",
    link: "http://www.kcrw.com/people/colin-holbrook",
    type: "radio",
  },
  {
    title: "Men and violence: Sizing up how men size up one another",
    author: "Mohan, G.",
    publication: "The Los Angeles Times",
    date: "October 9, 2014",
    link: "http://www.latimes.com/science/la-sci-c1-evolution-fessler-20141009-story.html",
    type: "article",
  },
  {
    title: "Synchronized marching boosts confidence",
    author: "Bohannon, J.",
    publication: "Science",
    date: "August 26, 2014",
    link: "http://news.sciencemag.org/biology/2014/08/synchronized-marching-boosts-confidence",
    type: "article",
  },
] as const
