import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'
import useActiveSection from './hooks/useActiveSection'
import useScrollProgress from './hooks/useScrollProgress'
import { navLinks } from './data/content'

const sectionIds = navLinks.map((link) => link.id)

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const active = useActiveSection(sectionIds)
  const progress = useScrollProgress()

  useScrollReveal([loaded])

  useEffect(() => {
    document.body.classList.toggle('is-loading', !loaded)
  }, [loaded])

  return (
    <div className="app">
      <Preloader onDone={() => setLoaded(true)} />

      <div className="bg-layer" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <Navbar active={active} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
