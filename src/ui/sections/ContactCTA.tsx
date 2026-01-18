import { Button } from '../components/Button'

export function ContactCTA() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neon-cyan/10 to-neon-blue/10 p-12 md:p-16 text-center">
        <div className="grain" />

        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Ready to Build the Future?
        </h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's transform your vision into reality with cutting-edge technology
          and innovative solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="primary" size="lg" href="mailto:hello@futurex.dev">
            Start a Project
          </Button>
          <Button variant="outline" size="lg" to="/partnerships">
            Explore Partnerships
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm">
            <div className="text-sm uppercase tracking-wider text-neon-cyan mb-2">
              Location
            </div>
            <div className="text-gray-300">Sofia, Bulgaria<br />Mladost 1</div>
          </div>

          <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm">
            <div className="text-sm uppercase tracking-wider text-neon-cyan mb-2">
              Phone
            </div>
            <div className="text-gray-300">+359 899 75 2828</div>
          </div>

          <div className="p-6 rounded-lg bg-black/30 backdrop-blur-sm">
            <div className="text-sm uppercase tracking-wider text-neon-cyan mb-2">
              Email
            </div>
            <div className="text-gray-300">hello@futurex.dev</div>
          </div>
        </div>
      </div>
    </div>
  )
}
