export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Future X
            </h3>
            <p className="text-gray-400 text-sm">
              Innovative software solutions for tomorrow's challenges.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">About</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">AI Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Sofia, Bulgaria</li>
              <li>+359 899 75 2828</li>
              <li><a href="mailto:hello@futurex.dev" className="hover:text-neon-cyan transition-colors">hello@futurex.dev</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; 2026 Future X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
