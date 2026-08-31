"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Robothespian.jpg-eghah1Y56TNcVtaX2MJecyTUpnwsbx.jpeg",
    alt: "Robothespian - Humanoid robot used in human-AI interaction research",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bunker.jpg-ms2SkB23AjOS7kqbIKRXVJ1lxlJJqv.jpeg",
    alt: "Bunker - Autonomous ground vehicle for crisis response studies",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unitree%20Go%202.jpg-Qm9g027gdpfmiSRg2ywuJXBVIBfMTE.jpeg",
    alt: "Unitree Go 2 - Quadruped robot for mobility research",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FNir%20Cap.jpg-Wg80HaqSAeoAHp5xVTEgGrZoYI4Bpk.jpeg",
    alt: "fNIR Cap - Neural monitoring device for cognitive studies",
  },
]

export function ImageCarousel() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-0 flex items-center justify-center">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="aspect-[3/2] object-contain rounded-lg"
                priority={index === 0}
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
