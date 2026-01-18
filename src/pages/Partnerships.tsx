import { PageRenderer } from '../ui/primitives/PageRenderer'
import { WebGLBackdrop } from '../ui/components/WebGLBackdrop'
import { KineticHeading } from '../ui/components/KineticHeading'
import { Button } from '../ui/components/Button'
import { team } from '../config/team'

function PartnershipsHero() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <div className="text-sm uppercase tracking-wider text-neon-cyan mb-6">
        Partnerships
      </div>
      <KineticHeading
        text="Build the Future Together"
        className="text-5xl md:text-6xl mb-8"
        gradient
      />
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        We collaborate with industry leaders, startups, and visionaries
        to create transformative solutions.
      </p>
      <Button variant="primary" size="lg" href="mailto:partnerships@futurex.dev">
        Become a Partner
      </Button>
    </div>
  )
}

function Team() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-display font-bold mb-12 text-center">
        Leadership Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-cyan to-neon-blue mb-6 mx-auto" />
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <div className="text-neon-cyan text-sm uppercase tracking-wider mb-4">
              {member.role}
            </div>
            <p className="text-gray-400 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PartnerBenefits() {
  const benefits = [
    {
      title: 'Co-Innovation',
      description: 'Collaborate on cutting-edge projects and shared R&D initiatives.',
    },
    {
      title: 'Market Access',
      description: 'Expand your reach through our network and distribution channels.',
    },
    {
      title: 'Technical Excellence',
      description: 'Access our expertise in AI, blockchain, and cloud architecture.',
    },
    {
      title: 'Shared Success',
      description: 'Revenue sharing models and joint go-to-market strategies.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-display font-bold mb-12 text-center">
        Partnership Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold mb-3 text-neon-cyan">{benefit.title}</h3>
            <p className="text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Partnerships() {
  const config = {
    sections: [
      {
        id: 'hero',
        component: <PartnershipsHero />,
        enabled: true,
        animate: false,
      },
      {
        id: 'team',
        component: <Team />,
        enabled: true,
        animate: true,
        className: 'bg-gradient-to-b from-black to-gray-900 min-h-auto',
      },
      {
        id: 'benefits',
        component: <PartnerBenefits />,
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
