import { KineticHeading } from '../components/KineticHeading'
import { Button } from '../components/Button'

export function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="mb-6">
          <div className="text-sm uppercase tracking-[0.3em] text-neon-cyan mb-4">
            Welcome to the Future
          </div>
          <KineticHeading
            text="Building Tomorrow's Software Today"
            className="text-5xl md:text-7xl lg:text-8xl mb-6"
            gradient
          />
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We create innovative software solutions that are scalable, secure, and intuitive.
          Transform your vision into reality with cutting-edge technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button variant="primary" size="lg" to="/on-track">
            Explore Capabilities
          </Button>
          <Button variant="outline" size="lg" to="/off-track">
            View R&D Projects
          </Button>
        </div>

        <div className="pt-12">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-neon-cyan"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
