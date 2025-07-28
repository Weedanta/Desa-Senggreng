import type React from "react"
export interface Testimonial {
  id: string
  name: string
  avatar: string
  content: string
}

export interface KataPendudukProps {
  testimonials?: Testimonial[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export interface UseKataPendudukReturn {
  currentIndex: number
  testimonials: Testimonial[]
  nextSlide: () => void
  prevSlide: () => void
  goToSlide: (index: number) => void
  visibleTestimonials: Testimonial[]
}

export interface CardProps {
  children: React.ReactNode
  className?: string
}

export interface CardContentProps {
  children: React.ReactNode
  className?: string
}
