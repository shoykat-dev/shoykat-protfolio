import { profile, socials, navLinks } from '../data/content'
import Icon from './Icons'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const toTop = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.name}.</span>
          <p className="footer__tagline">Building clean, fast and useful digital experiences.</p>
          <div className="footer__socials">
            {socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__side">
          <a href={`mailto:${profile.email}`} className="footer__mail">
            {profile.email}
          </a>
          <button className="footer__top" onClick={toTop} aria-label="Back to top">
            <Icon name="arrowUpRight" />
          </button>
        </div>
      </div>

      <div className="container footer__base">
        <span>© {year} {profile.name}. All rights reserved.</span>
        <span>{profile.title}</span>
      </div>
    </footer>
  )
}
