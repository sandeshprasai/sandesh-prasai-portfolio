import type { ReactNode } from "react"

export type HoverEffect = "scale" | "glow" | "shadow" | "lift"
export type ScrollAnimation = "fade" | "slide-up" | "slide-left" | "slide-right" | "zoom"
export type InteractionType = "modal" | "link" | "expand" | "custom"

export interface InteractiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  interactionType?: InteractionType
  href?: string
  modalContent?: ReactNode
  onCustomClick?: () => void
  hoverEffect?: HoverEffect
  animateOnScroll?: boolean
  scrollAnimation?: ScrollAnimation
  priority?: boolean
}
