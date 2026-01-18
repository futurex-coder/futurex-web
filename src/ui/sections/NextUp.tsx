export function NextUp() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm uppercase tracking-wider text-neon-cyan mb-4">
            Next Launch
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            AI-Powered Analytics Platform
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Our next innovation combines machine learning with real-time data processing
            to deliver actionable insights that drive business growth.
          </p>
          <div className="flex gap-4 text-sm">
            <div>
              <div className="text-2xl font-bold text-neon-cyan">Q2 2026</div>
              <div className="text-gray-500">Expected Launch</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neon-cyan">Beta</div>
              <div className="text-gray-500">Current Stage</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center">
            <div className="text-6xl">🚀</div>
          </div>
        </div>
      </div>
    </div>
  )
}
