import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'
import Icon from './Icons'
import './Navbar.css'

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // mobile menu khola thakle body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (event, id) => {
    event.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 78
      window.scrollTo({ top, behavior: 'smooth' })
      history.replaceState(null, '', `#${id}`)
    }
  }

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__brand" onClick={(e) => go(e, 'home')}>
          <span className="nav__mark">{profile.initials}</span>
          <span className="nav__name">Shoykat.</span>
        </a>

        <nav className="nav__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link${active === link.id ? ' is-active' : ''}`}
              onClick={(e) => go(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="#contact" className="btn btn--primary btn--sm nav__cta" onClick={(e) => go(e, 'contact')}>
            Let&apos;s talk
            <Icon name="arrowUpRight" />
          </a>
          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div className="nav__mobile" hidden={!open}>
        {navLinks.map((link, i) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav__mobile-link${active === link.id ? ' is-active' : ''}`}
            style={{ '--i': i }}
            onClick={(e) => go(e, link.id)}
          >
            {link.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`} className="nav__mobile-mail">
          {profile.email}
        </a>
      </div>
    </header>
  )
}
