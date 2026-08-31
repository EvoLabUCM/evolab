"use client"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

interface VideoBackgroundProps {
  videoUrl: string
  overlayOpacity?: number
}

export function VideoBackground({ videoUrl, overlayOpacity = 0.7 }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const isMobile = useMediaQuery("(max-width: 640px)")

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Play the video when component mounts
    const playVideo = async () => {
      try {
        await video.play()
      } catch (error) {
        console.error("Error playing video:", error)
      }
    }

    playVideo()

    // Add event listener for when video ends to restart it
    const handleVideoEnd = () => {
      video.currentTime = 0
      video.play().catch((err) => console.error("Error replaying video:", err))
    }

    video.addEventListener("ended", handleVideoEnd)

    return () => {
      video.removeEventListener("ended", handleVideoEnd)
      video.pause()
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute min-h-full min-w-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-background" style={{ opacity: overlayOpacity }} />
      <Button
        variant="ghost"
        size={isMobile ? "sm" : "icon"}
        onClick={toggleMute}
        className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-black/30 hover:bg-black/50 text-white rounded-full z-10 p-1 sm:p-2"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" /> : <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" />}
      </Button>
    </div>
  )
}
