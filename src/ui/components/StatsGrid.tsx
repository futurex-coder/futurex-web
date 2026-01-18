import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface Stat {
  label: string
  value: string
  suffix?: string
}

interface StatsGridProps {
  stats: Stat[]
  columns?: number
  className?: string
}

export function StatsGrid({ stats, columns = 4, className = '' }: StatsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!gridRef.current || prefersReducedMotion) return

    const items = gridRef.current.querySelectorAll('.stat-item')

    gsap.from(items, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
      },
    })
  }, [prefersReducedMotion])

  return (
    <div
      ref={gridRef}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8 ${className}`}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-item border border-white/10 rounded-lg p-8 backdrop-blur-sm bg-white/5"
        >
          <div className="text-5xl font-display font-bold text-neon-cyan mb-2">
            {stat.value}
            {stat.suffix && <span className="text-3xl">{stat.suffix}</span>}
          </div>
          <div className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
