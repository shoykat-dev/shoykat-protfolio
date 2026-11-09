import { profile } from '../data/content'
import SectionHead from './SectionHead'
import Icon from './Icons'
import './About.css'

const facts = [
  { label: 'Role', value: 'WordPress Developer' },
  { label: 'Based in', value: 'Mirpur-1, Dhaka, Bangladesh' },
  { label: 'Focus', value: 'Elementor, JetEngine, ACF, WooCommerce' },
  { label: 'Working with', value: 'Startups, agencies, small businesses' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead
          eyebrow="About me"
          title="Turning ideas into websites that work."
        />

        <div className="about__grid">
          <aside className="about__facts glass reveal">
            {facts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <span className="about__fact-label">{fact.label}</span>
                <span className="about__fact-value">{fact.value}</span>
              </div>
            ))}
          </aside>

          <div className="about__body">
            {profile.about.map((paragraph, i) => (
              <p className="about__text reveal" style={{ '--reveal-delay': `${i * 90}ms` }} key={i}>
                {paragraph}
              </p>
            ))}

            <ul className="about__highlights">
              {profile.highlights.map((item, i) => (
                <li className="about__highlight reveal" style={{ '--reveal-delay': `${i * 70}ms` }} key={item}>
                  <Icon name="check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
