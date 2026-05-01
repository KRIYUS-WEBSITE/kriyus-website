import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home          from './pages/Home'
import About         from './pages/About'
import Projects      from './pages/Projects'
import TrainingCenter from './pages/TrainingCenter'
import Impact        from './pages/Impact'
import Collaborations from './pages/Collaborations'
import Donate        from './pages/Donate'
import Volunteer     from './pages/Volunteer'
import Gallery       from './pages/Gallery'
import Contact       from './pages/Contact'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/projects"       element={<Projects />} />
          <Route path="/training-center" element={<TrainingCenter />} />
          <Route path="/impact"         element={<Impact />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/donate"         element={<Donate />} />
          <Route path="/volunteer"      element={<Volunteer />} />
          <Route path="/gallery"        element={<Gallery />} />
          <Route path="/contact"        element={<Contact />} />
          <Route path="*"               element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
