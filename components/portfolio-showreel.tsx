"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Robothespian.jpg-eghah1Y56TNcVtaX2MJecyTUpnwsbx.jpeg",
    alt: "Robothespian - Humanoid robot used in human-AI interaction research",
    description:
      "Robothespian is a programmable humanoid robot used in our research to study how humans interact with and trust anthropomorphic AI systems during various scenarios.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bunker.jpg-ms2SkB23AjOS7kqbIKRXVJ1lxlJJqv.jpeg",
    alt: "Bunker - Autonomous ground vehicle for crisis response studies",
    description:
      "The Bunker autonomous ground vehicle allows us to simulate crisis response scenarios and study human trust in AI-powered emergency response systems.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unitree%20Go%202.jpg-Qm9g027gdpfmiSRg2ywuJXBVIBfMTE.jpeg",
    alt: "Unitree Go 2 - Quadruped robot for mobility research",
    description:
      "Our Unitree Go 2 quadruped robot enables research on human-AI interaction in dynamic environments where mobility and adaptability are critical factors.",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FNir%20Cap.jpg-Wg80HaqSAeoAHp5xVTEgGrZoYI4Bpk.jpeg",
    alt: "fNIR Cap - Neural monitoring device for cognitive studies",
    description:
      "The fNIR Cap allows us to monitor neural activity during human-AI interactions, providing valuable insights into cognitive processes and trust formation.",
  },
]

export function PortfolioShowreel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showInfo, setShowInfo] = useState(false)
  const [direction, setDirection] = useState(0)
  const slideInterval = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useMediaQuery("(max-width: 640px)")

  const startSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }

    slideInterval.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000)
  }

  useEffect(() => {
    startSlideTimer()
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current)
      }
    }
  }, [])

  const handlePrevious = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    startSlideTimer()
  }

  const handleNext = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    startSlideTimer()
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl">
      <div className="aspect-[16/9] relative bg-black/20 backdrop-blur-sm">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <h3 className="text-base md:text-lg font-semibold text-white">
                    {images[currentIndex].alt.split(" - ")[0]}
                  </h3>
                  <p className="text-xs md:text-sm text-white/90">{images[currentIndex].description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-1 md:space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
              startSlideTimer()
            }}
            className={cn(
              "w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-300",
              index === currentIndex ? "bg-primary w-4 md:w-6" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size={isMobile ? "sm" : "icon"}
        className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full z-10 p-1 md:p-2"
        onClick={handlePrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </Button>

      <Button
        variant="ghost"
        size={isMobile ? "sm" : "icon"}
        className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full z-10 p-1 md:p-2"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </Button>

      <Button
        variant="ghost"
        size={isMobile ? "sm" : "icon"}
        className="absolute top-1 md:top-2 right-1 md:right-2 bg-black/30 hover:bg-black/50 text-white rounded-full z-10 p-1 md:p-2"
        onClick={toggleInfo}
        aria-label={showInfo ? "Hide information" : "Show information"}
      >
        <Info className="h-4 w-4 md:h-5 md:w-5" />
      </Button>
    </div>
  )
}
