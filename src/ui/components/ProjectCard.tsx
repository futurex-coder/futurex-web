import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import gsap from 'gsap'

export interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  features: string[]
  image?: string
  color: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!cardRef.current || prefersReducedMotion) return

    gsap.from(cardRef.current, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
      },
    })
  }, [index, prefersReducedMotion])

  return (
    <Link to={`/projects/${project.slug}`}>
      <div
        ref={cardRef}
        className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all duration-500"
      >
        <div className="aspect-video relative overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
            style={{
              background: project.image
                ? `url(${project.image})`
                : `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">
              {project.subtitle}
            </div>
            <h3 className="text-3xl font-display font-bold mb-3" style={{ color: project.color }}>
              {project.title}
            </h3>
            <p className="text-gray-300 line-clamp-2">{project.description}</p>
          </div>
        </div>

        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all">
          <svg
            className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
