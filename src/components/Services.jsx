import { services } from '../data/content'
import SectionHead from './SectionHead'
import Icon from './Icons'
import './Services.css'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead
          eyebrow="Services"
          title="How I can help your business."
          sub="From a single landing page to a complete WordPress store — built, optimized and handed over ready to use."
        />

        <div className="services__grid">
          {services.map((service, i) => (
            <article
              className="services__card reveal"
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
              key={service.title}
            >
              <span className="services__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="services__icon">
                <Icon name={service.icon} />
              </span>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__text">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
