import Image from "next/image"

const technology = [
  {
    id: 1,
    title: "Robothespian",
    subtitle: "Humanoid Robot Research Platform",
    description:
      "Robothespian is a programmable humanoid robot used in our research to study how humans interact with and trust anthropomorphic AI systems during various scenarios.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Robothespian.jpg-eghah1Y56TNcVtaX2MJecyTUpnwsbx.jpeg",
  },
  {
    id: 2,
    title: "Bunker",
    subtitle: "Autonomous Ground Vehicle",
    description:
      "The Bunker autonomous ground vehicle allows us to simulate crisis response scenarios and study human trust in AI-powered emergency response systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bunker.jpg-ms2SkB23AjOS7kqbIKRXVJ1lxlJJqv.jpeg",
  },
  {
    id: 3,
    title: "Unitree Go 2",
    subtitle: "Quadruped Robot Platform",
    description:
      "Our Unitree Go 2 quadruped robot enables research on human-AI interaction in dynamic environments where mobility and adaptability are critical factors.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unitree%20Go%202.jpg-Qm9g027gdpfmiSRg2ywuJXBVIBfMTE.jpeg",
  },
  {
    id: 4,
    title: "fNIR Cap",
    subtitle: "Neural Monitoring Device",
    description:
      "The fNIR Cap allows us to monitor neural activity during human-AI interactions, providing valuable insights into cognitive processes and trust formation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FNir%20Cap.jpg-Wg80HaqSAeoAHp5xVTEgGrZoYI4Bpk.jpeg",
  },
]

export function TechnologyGrid() {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
      {technology.map((item) => (
        <article key={item.id} className="overflow-hidden rounded-xl border-2 border-[#2d3871] bg-white">
          <div className="relative aspect-[16/10]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-2 border-t-2 border-[#2d3871] p-5">
            <h3 className="text-lg font-semibold leading-snug text-[#2d3871]">{item.title}</h3>
            <p className="text-sm font-medium text-[#3b3183]">{item.subtitle}</p>
            <p className="text-sm leading-relaxed text-[#3b3183]">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
