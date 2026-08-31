"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

const highlights = [
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

export function LabHighlightsReel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [infoVisible, setInfoVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const currentSlide = highlights[currentIndex]

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    autoPlayRef.current = setTimeout(() => {
      if (!isAnimating && !infoVisible) {
        handleNext()
      } else {
        startAutoPlay()
      }
    }, 5000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
    }
  }, [currentIndex, isAnimating, infoVisible])

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === highlights.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const toggleInfo = () => {
    setInfoVisible(!infoVisible)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm">
      <div className="aspect-[16/9] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentSlide.image || "/images/placeholder.png"}
              alt={currentSlide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`caption-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white">{currentSlide.title}</h3>
            <p className="text-sm md:text-base text-white/80">{currentSlide.subtitle}</p>
          </motion.div>
        </AnimatePresence>

        {/* Info Panel */}
        <AnimatePresence>
          {infoVisible && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center p-6 md:p-8 z-20"
            >
              <button
                onClick={toggleInfo}
                className="absolute top-3 right-3 md:top-4 md:right-4 text-white/70 hover:text-white transition-colors"
                aria-label="Close information"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{currentSlide.title}</h3>
                <p className="text-sm md:text-base text-white/80 mb-4">{currentSlide.subtitle}</p>
                <p className="text-sm md:text-base text-white/90">{currentSlide.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-2 md:px-4 z-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </motion.button>
        </div>

        {/* Info Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleInfo}
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-colors z-10"
          aria-label={infoVisible ? "Hide information" : "Show information"}
        >
          <Info className="h-4 w-4 md:h-5 md:w-5" />
        </motion.button>

        {/* Indicators */}
        <div className="absolute bottom-16 md:bottom-20 left-0 right-0 flex justify-center gap-2 z-10">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "transition-all duration-300 rounded-full",
                index === currentIndex ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60",
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
