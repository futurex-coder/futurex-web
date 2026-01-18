import { PageRenderer } from '../ui/primitives/PageRenderer'
import { WebGLBackdrop } from '../ui/components/WebGLBackdrop'
import { KineticHeading } from '../ui/components/KineticHeading'
import { StatsGrid, Stat } from '../ui/components/StatsGrid'
import { DataTable } from '../ui/components/DataTable'

const stats: Stat[] = [
  { label: 'Projects Delivered', value: '150', suffix: '+' },
  { label: 'Team Members', value: '45' },
  { label: 'Years Experience', value: '12', suffix: '+' },
  { label: 'Client Satisfaction', value: '98', suffix: '%' },
]

const deliveryPlaybook = {
  headers: ['Phase', 'Duration', 'Deliverables', 'Team Involvement'],
  rows: [
    ['Discovery', '1-2 weeks', 'Requirements, Wireframes, Architecture', 'Full Team'],
    ['Design', '2-3 weeks', 'UI/UX, Prototypes, Design System', 'Design + Frontend'],
    ['Build', '6-12 weeks', 'Development, Testing, Integration', 'Full Team'],
    ['Launch', '1 week', 'Deployment, Training, Documentation', 'DevOps + PM'],
    ['Iterate', 'Ongoing', 'Updates, Features, Optimization', 'Dedicated Squad'],
  ],
}

function CapabilitiesHero() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <div className="text-sm uppercase tracking-wider text-neon-cyan mb-6">
        Capabilities
      </div>
      <KineticHeading
        text="Built for Scale, Engineered for Speed"
        className="text-5xl md:text-6xl mb-8"
        gradient
      />
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        We combine agile delivery with scalable architecture, custom integrations,
        and proactive support to accelerate your digital transformation.
      </p>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-display font-bold mb-12 text-center">
        Track Record
      </h2>
      <StatsGrid stats={stats} columns={4} />
    </div>
  )
}

function DeliveryPlaybook() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-display font-bold mb-12 text-center">
        Our Delivery Process
      </h2>
      <DataTable headers={deliveryPlaybook.headers} rows={deliveryPlaybook.rows} />
    </div>
  )
}

export default function OnTrack() {
  const config = {
    sections: [
      {
        id: 'hero',
        component: <CapabilitiesHero />,
        enabled: true,
        animate: false,
      },
      {
        id: 'stats',
        component: <StatsSection />,
        enabled: true,
        animate: true,
        className: 'bg-gradient-to-b from-black to-gray-900',
      },
      {
        id: 'delivery',
        component: <DeliveryPlaybook />,
        enabled: true,
        animate: true,
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
