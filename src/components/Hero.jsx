import { useEffect, useRef } from 'react'
import { profile, heroStats } from '../data/content'
import Icon from './Icons'
import portrait from '../assets/portrait.webp'
import './Hero.css'

export default function Hero() {
  const ref = useRef(null)

  // Scroll korle portrait panel ta halka parallax e move korbe.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const y = Math.min(window.scrollY, 700)
      el.style.setProperty('--shift', `${y * 0.06}px`)
      el.style.setProperty('--fade', String(Math.max(0, 1 - y / 620)))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const scrollTo = (event, id) => {
    event.preventDefault()
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="hero__status">
            <i />
            {profile.availability}
          </span>

          <p className="hero__hello">Hello, I&apos;m</p>

          <h1 className="hero__name">
            Shoykat
            <br />
            Hossain <span className="hero__name-accent">Sabbir.</span>
          </h1>

          <p className="hero__role">{profile.title}</p>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary" onClick={(e) => scrollTo(e, 'projects')}>
              View projects
              <Icon name="arrowDown" />
            </a>
            <a href={profile.resumeUrl} className="btn btn--ghost" download="Shoykat-Hossain-Sabbir-Resume.pdf">
              Download resume
              <Icon name="download" />
            </a>
            <a href="#contact" className="btn btn--text" onClick={(e) => scrollTo(e, 'contact')}>
              Contact me
              <Icon name="arrowUpRight" />
            </a>
          </div>

          <ul className="hero__stats" aria-label="Key facts">
            {heroStats.map((stat) => (
              <li key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>

          <ul className="hero__meta">
            <li>Based in Dhaka</li>
            <li>WordPress + React</li>
            <li>Client-focused</li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__ring" aria-hidden="true" />
          <figure className="hero__card glass">
            <img
              className="hero__photo"
              src={portrait}
              width="760"
              height="906"
              alt="Portrait of Shoykat Hossain Sabbir"
            />
          </figure>
        </div>
      </div>

      <a className="hero__scroll" href="#about" onClick={(e) => scrollTo(e, 'about')}>
        <span>Scroll</span>
        <i />
      </a>
    </section>
  )
}
