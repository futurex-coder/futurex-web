import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LenisProvider } from './ui/providers/LenisProvider'
import Home from './pages/Home'
import OnTrack from './pages/OnTrack'
import OffTrack from './pages/OffTrack'
import Calendar from './pages/Calendar'
import Partnerships from './pages/Partnerships'
import ProjectDetail from './pages/ProjectDetail'
import Navigation from './ui/layout/Navigation'
import Footer from './ui/layout/Footer'

function App() {
  return (
    <Router>
      <LenisProvider>
        <div className="relative min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/on-track" element={<OnTrack />} />
            <Route path="/off-track" element={<OffTrack />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </LenisProvider>
    </Router>
  )
}

export default App
