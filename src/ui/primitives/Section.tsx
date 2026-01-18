import { ReactNode, useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionProps {
  children: ReactNode
  className?: string
  theme?: 'dark' | 'light'
  pin?: boolean
  animate?: boolean
  id?: string
}

export function Section({
  children,
  className = '',
  theme = 'dark',
  pin = false,
  animate = true,
  id
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion || !animate) return

    const section = sectionRef.current

    if (pin) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
      })
    }

    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [pin, animate, prefersReducedMotion])

  const themeClasses = theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative min-h-screen flex items-center justify-center ${themeClasses} ${className}`}
    >
      {children}
    </section>
  )
}
