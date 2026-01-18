import { PageRenderer } from '../ui/primitives/PageRenderer'
import { WebGLBackdrop } from '../ui/components/WebGLBackdrop'
import { KineticHeading } from '../ui/components/KineticHeading'
import { ParallaxMedia } from '../ui/components/ParallaxMedia'
import { services } from '../config/services'

function RnDHero() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <div className="text-sm uppercase tracking-wider text-neon-cyan mb-6">
        R&D / Experiments
      </div>
      <KineticHeading
        text="Exploring Tomorrow's Technology"
        className="text-5xl md:text-6xl mb-8"
        gradient
      />
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Our innovation lab where we experiment with emerging technologies,
        prototype new ideas, and push the boundaries of what's possible.
      </p>
    </div>
  )
}

function ExperimentalProjects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="space-y-32">
        {services.slice(0, 4).map((service, index) => (
          <div
            key={service.name}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-3xl font-display font-bold mb-4">{service.name}</h3>
              <p className="text-gray-400 text-lg mb-6">{service.description}</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                  Experimental
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/10">
                  In Progress
                </span>
              </div>
            </div>

            <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <ParallaxMedia className="h-96 rounded-xl" speed={0.3} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function OffTrack() {
  const config = {
    sections: [
      {
        id: 'hero',
        component: <RnDHero />,
        enabled: true,
        animate: false,
      },
      {
        id: 'experiments',
        component: <ExperimentalProjects />,
        enabled: true,
        animate: true,
        className: 'min-h-auto',
      },
    ],
  }

  return (
    <>
      <WebGLBackdrop />
      <PageRenderer config={config} />
    </>
  )
}
