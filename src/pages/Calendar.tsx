import { PageRenderer } from '../ui/primitives/PageRenderer'
import { WebGLBackdrop } from '../ui/components/WebGLBackdrop'
import { KineticHeading } from '../ui/components/KineticHeading'

function RoadmapHero() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <div className="text-sm uppercase tracking-wider text-neon-cyan mb-6">
        Roadmap
      </div>
      <KineticHeading
        text="What's Coming Next"
        className="text-5xl md:text-6xl mb-8"
        gradient
      />
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Our development timeline and upcoming milestones.
        Join us on the journey to shape the future.
      </p>
    </div>
  )
}

function Timeline() {
  const milestones = [
    {
      quarter: 'Q1 2026',
      title: 'AI Integration Suite',
      description: 'Launch of comprehensive AI tools for business automation.',
      status: 'In Progress',
    },
    {
      quarter: 'Q2 2026',
      title: 'Analytics Platform v2',
      description: 'Next-generation analytics with real-time insights.',
      status: 'Planning',
    },
    {
      quarter: 'Q3 2026',
      title: 'Blockchain Framework',
      description: 'Decentralized solution framework for enterprise.',
      status: 'Research',
    },
    {
      quarter: 'Q4 2026',
      title: 'Mobile SDK Release',
      description: 'Cross-platform SDK for rapid mobile development.',
      status: 'Planned',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="relative pl-8 pb-8 border-l-2 border-neon-cyan/30 last:border-0"
          >
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-neon-cyan shadow-lg shadow-neon-cyan/50" />

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm uppercase tracking-wider text-neon-cyan mb-2">
                    {milestone.quarter}
                  </div>
                  <h3 className="text-2xl font-display font-bold">{milestone.title}</h3>
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                  {milestone.status}
                </span>
              </div>
              <p className="text-gray-400">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Calendar() {
  const config = {
    sections: [
      {
        id: 'hero',
        component: <RoadmapHero />,
        enabled: true,
        animate: false,
      },
      {
        id: 'timeline',
        component: <Timeline />,
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
