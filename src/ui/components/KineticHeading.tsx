import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import gsap from 'gsap'

interface KineticHeadingProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  gradient?: boolean
}

export function KineticHeading({
  text,
  className = '',
  as = 'h1',
  gradient = false
}: KineticHeadingProps) {
  const textRef = useRef<HTMLHeadingElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const Tag = as

  useEffect(() => {
    if (!textRef.current || prefersReducedMotion) return

    const chars = textRef.current.querySelectorAll('.char')

    gsap.from(chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.7)',
    })
  }, [text, prefersReducedMotion])

  const words = text.split(' ')
  const gradientClass = gradient ? 'gradient-text' : ''

  return (
    <Tag ref={textRef} className={`font-display font-bold ${gradientClass} ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-4 last:mr-0">
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="char inline-block"
              style={{ display: 'inline-block' }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  )
}
