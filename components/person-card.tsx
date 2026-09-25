"use client"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown, ChevronUp, FileText, GraduationCap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn, withBasePath } from "@/lib/utils"

interface PersonCardProps {
  name: string
  role: string
  image: string
  description?: string
  portfolioUrl?: string
  cvUrl?: string
  expectedGraduation?: string
}

export function PersonCard({
  name,
  role,
  image,
  description,
  portfolioUrl,
  cvUrl,
  expectedGraduation,
}: PersonCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const hasDetails = Boolean(description || portfolioUrl || cvUrl || expectedGraduation)

  return (
    <Card
      className={cn(
        "group self-start overflow-hidden rounded-xl border-2 border-[#2d3871] bg-white shadow-none transition-all duration-300",
        hasDetails && "cursor-pointer hover:shadow-[4px_4px_0_0_#ffce42]",
      )}
      onClick={() => hasDetails && setIsExpanded(!isExpanded)}
    >
      <div className="aspect-square relative">
        <Image
          src={withBasePath(image || "/images/placeholder.png")}
          alt={name}
          fill
          className={cn(
            "object-cover object-top transition-all duration-500",
            isExpanded ? "scale-105 brightness-90" : "group-hover:scale-105",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300",
            isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-70",
          )}
        />

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white [-webkit-text-stroke:3px_#2d3871] [paint-order:stroke_fill]">
          <h3 className="font-bold text-base sm:text-lg">{name}</h3>
          <p className="text-xs sm:text-sm">{role}</p>
        </div>

        <button
          className={cn(
            "absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/50 rounded-full p-1 transition-all",
            !hasDetails && "hidden",
            isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100",
          )}
          onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          {isExpanded ? (
            <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
          ) : (
            <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && hasDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="p-3 sm:p-4">
              {expectedGraduation && (
                <div className="mb-3 flex items-center gap-1.5 text-xs text-[#3b3183] sm:text-sm">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>Expected Graduation: {expectedGraduation}</span>
                </div>
              )}
              {description && (
                <p className="mb-4 whitespace-pre-line text-xs leading-relaxed text-[#3b3183] sm:text-sm">
                  {description}
                </p>
              )}
              <div className="flex flex-col gap-2">
                {portfolioUrl && (
                  <Button size="sm" className="w-full bg-[#ffce42] text-xs text-black hover:bg-[#ffce42]/90 sm:text-sm" asChild>
                    <a
                      href={portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2"
                    >
                      View Profile <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </a>
                  </Button>
                )}
                {cvUrl && (
                  <Button size="sm" className="w-full bg-[#ffce42] text-xs text-black hover:bg-[#ffce42]/90 sm:text-sm" asChild>
                    <a
                      href={cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-2"
                    >
                      View Curriculum Vitae <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
