import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug } from '../config/projects'
import { WebGLBackdrop } from '../ui/components/WebGLBackdrop'
import { Button } from '../ui/components/Button'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Button to="/">Back to Home</Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <WebGLBackdrop />

      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-400 hover:text-neon-cyan transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <div className="mb-12">
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">
              {project.subtitle}
            </div>
            <h1
              className="text-5xl md:text-6xl font-display font-bold mb-6"
              style={{ color: project.color }}
            >
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          <div
            className="aspect-video rounded-xl mb-12 relative overflow-hidden border border-white/10"
            style={{
              background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
              {project.subtitle === 'Appointment Platform' && '📅'}
              {project.subtitle === 'Taxi Booking Platform' && '🚕'}
              {project.subtitle === 'NFC Business Cards' && '💳'}
              {project.subtitle === 'Entertainment Mobile App' && '🎮'}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  >
                    ✓
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-12">
            <h2 className="text-3xl font-display font-bold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Interested in a Similar Solution?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can build something amazing for your business.
            </p>
            <Button variant="primary" size="lg" href="mailto:hello@futurex.dev">
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
