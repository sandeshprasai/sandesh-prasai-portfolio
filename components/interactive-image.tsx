"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { InteractiveImageProps } from "@/lib/types"

export function InteractiveImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  interactionType = "expand",
  href,
  modalContent,
  onCustomClick,
  hoverEffect = "scale",
  animateOnScroll = true,
  scrollAnimation = "fade",
  priority = false,
}: InteractiveImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (!animateOnScroll || !imageRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(imageRef.current)

    return () => observer.disconnect()
  }, [animateOnScroll])

  const handleClick = () => {
    switch (interactionType) {
      case "modal":
        setIsModalOpen(true)
        break
      case "link":
        if (href) window.open(href, "_blank", "noopener,noreferrer")
        break
      case "expand":
        setIsExpanded(!isExpanded)
        break
      case "custom":
        onCustomClick?.()
        break
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleClick()
    }
  }

  // Hover effect classes
  const hoverEffectClasses = {
    scale: "hover:scale-105 active:scale-95",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-[1.02]",
    shadow: "hover:shadow-2xl hover:shadow-primary/20",
    lift: "hover:-translate-y-2 hover:shadow-xl",
  }

  // Scroll animation classes
  const scrollAnimationClasses = {
    fade: "opacity-0 transition-opacity duration-700",
    "slide-up": "translate-y-12 opacity-0 transition-all duration-700",
    "slide-left": "translate-x-12 opacity-0 transition-all duration-700",
    "slide-right": "-translate-x-12 opacity-0 transition-all duration-700",
    zoom: "scale-90 opacity-0 transition-all duration-700",
  }

  const visibleClasses = {
    fade: "opacity-100",
    "slide-up": "translate-y-0 opacity-100",
    "slide-left": "translate-x-0 opacity-100",
    "slide-right": "translate-x-0 opacity-100",
    zoom: "scale-100 opacity-100",
  }

  const Component = interactionType === "link" && href ? "a" : "div"

  return (
    <>
      <Component
        ref={imageRef}
        className={cn(
          "relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300",
          hoverEffectClasses[hoverEffect],
          animateOnScroll && scrollAnimationClasses[scrollAnimation],
          animateOnScroll && isVisible && visibleClasses[scrollAnimation],
          isExpanded && "fixed inset-4 z-50 scale-100",
          className,
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role={interactionType === "link" ? "link" : "button"}
        aria-label={alt}
        {...(interactionType === "link" && href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <div className="relative w-full h-full">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={width}
            height={height}
            className={cn(
              "object-cover w-full h-full transition-transform duration-300",
              isExpanded && "object-contain",
            )}
            priority={priority}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
              <p className="text-sm font-medium">
                {interactionType === "link" && "Click to open"}
                {interactionType === "modal" && "Click to view details"}
                {interactionType === "expand" && "Click to expand"}
                {interactionType === "custom" && "Click to interact"}
              </p>
            </div>
          </div>
        </div>
      </Component>

      {/* Modal */}
      {isModalOpen && interactionType === "modal" && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-background rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10 bg-background/80 rounded-full p-2"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="p-6">
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-auto rounded-lg mb-4"
              />
              {modalContent}
            </div>
          </div>
        </div>
      )}

      {/* Expanded overlay */}
      {isExpanded && interactionType === "expand" && (
        <div
          className="fixed inset-0 z-40 bg-black/90"
          onClick={() => setIsExpanded(false)}
          role="button"
          tabIndex={0}
          aria-label="Close expanded view"
          onKeyDown={(e) => {
            if (e.key === "Escape" || e.key === "Enter") {
              setIsExpanded(false)
            }
          }}
        />
      )}
    </>
  )
}
