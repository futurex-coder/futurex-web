export function Manifesto() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
        Our Philosophy
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="text-5xl">⚡</div>
          <h3 className="text-xl font-bold text-neon-cyan">Innovation First</h3>
          <p className="text-gray-400">
            We push boundaries with cutting-edge technology and creative solutions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-5xl">💎</div>
          <h3 className="text-xl font-bold text-neon-blue">Quality Driven</h3>
          <p className="text-gray-400">
            Excellence is not optional. We deliver uncompromising quality in every project.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-5xl">🎯</div>
          <h3 className="text-xl font-bold text-neon-green">Value Focused</h3>
          <p className="text-gray-400">
            Smart solutions that maximize impact and accelerate your growth.
          </p>
        </div>
      </div>

      <div className="mt-16 p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
        <p className="text-xl text-gray-300 leading-relaxed">
          We believe in agile delivery, scalable architecture, and proactive support.
          Our dedicated team combines technical expertise with strategic thinking
          to transform user experiences and accelerate digital transformation.
        </p>
      </div>
    </div>
  )
}
