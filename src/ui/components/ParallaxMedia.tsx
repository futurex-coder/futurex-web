import { useRef, useEffect } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxMediaProps {
  src?: string
  speed?: number
  className?: string
  overlay?: boolean
}

export function ParallaxMedia({
  src,
  speed = 0.5,
  className = '',
  overlay = true
}: ParallaxMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!containerRef.current || !imageRef.current || prefersReducedMotion) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    tl.to(imageRef.current, {
      y: `${speed * 100}%`,
      ease: 'none',
    })

    return () => {
      tl.kill()
    }
  }, [speed, prefersReducedMotion])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={imageRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: src ? `url(${src})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      )}
    </div>
  )
}
