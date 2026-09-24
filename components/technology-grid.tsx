import Image from "next/image"
import { withBasePath } from "@/lib/utils"

const technology = [
  {
    id: 1,
    title: "Ameca",
    subtitle: "AI-Powered Humanoid",
    description:
     // "Ameca's articulated face and gestures let us study how human-like expression shapes the trust people extend to a machine.",
    image: "/images/Ameca.jpeg",
    alt: "The Ameca humanoid robot, a grey articulated face and exposed mechanical torso, standing against a pale wall",
  },
  {
    id: 2,
    title: "RoboThespian",
    subtitle: "Humanoid with ",
    description:
    //  "This humanoid .",
    image: "/images/RT.jpeg",
    alt: "The RoboThespian humanoid robot, a white shell with a metallic face and blue cabling across the shoulders",
  },
  {
    id: 3,
    title: "Bunker",
    subtitle: "Autonomous Ground Vehicle",
    description:
    //  "The Bunker autonomous ground vehicle allows us to simulate crisis response scenarios and study human trust in AI-powered emergency response systems.",
    image: "/images/Bunker.jpeg",
    alt: "The Bunker tracked ground robot carrying a rotating LiDAR unit and a stereo camera on its upper deck",
  },
  {
    id: 4,
    title: "Unitree Go2",
    subtitle: "Quadruped Robot Platform",
    description:
   //   "Our Unitree Go2 quadruped robot enables research on human-AI interaction in dynamic environments where mobility and adaptability are critical factors.",
    image: "/images/Go2.jpeg",
    alt: "The Unitree Go2 quadruped robot standing in the lab with a LiDAR sensor mounted on its back",
  },
  {
    id: 5,
    title: "fNIR Cap",
    subtitle: "Neural Monitoring Device",
    description:
   //   "The fNIR Cap allows us to monitor neural activity during human-AI interactions, providing valuable insights into cognitive processes and trust formation.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FNir%20Cap.jpg-Wg80HaqSAeoAHp5xVTEgGrZoYI4Bpk.jpeg",
    alt: "An fNIRS neuroimaging cap used to record neural activity during experiments",
  },
]

export function TechnologyGrid() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {technology.map((item) => (
        <article key={item.id} className="overflow-hidden rounded-xl border-2 border-[#2d3871] shadow-[6px_6px_0_0_#ffce42] bg-white">
          <div className="relative aspect-square">
            <Image
              src={withBasePath(item.image)}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="space-y-2 border-t-2 border-[#2d3871] p-4">
            <h3 className="text-lg font-semibold leading-snug text-[#2d3871]">{item.title}</h3>
            <p className="text-sm font-medium text-[#3b3183]">{item.subtitle}</p>
            <p className="text-sm leading-relaxed text-[#3b3183]">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
