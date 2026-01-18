import { projects } from '../../config/projects'
import { ProjectCard } from '../components/ProjectCard'

export function ProjectsShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <div className="text-sm uppercase tracking-wider text-neon-cyan mb-4">
          Case Studies
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our portfolio of innovative solutions delivered for forward-thinking clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
