import { education } from '../data/content'
import SectionHead from './SectionHead'
import Icon from './Icons'
import './Education.css'

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHead
          eyebrow="Education"
          title="A foundation built on learning."
          sub="Formal education in computer science — from school to university, while building real client projects alongside it."
        />

        <div className="edu__summary reveal">
          <div className="edu__stat">
            <strong>03</strong>
            <span>Qualifications</span>
          </div>
          <div className="edu__stat">
            <strong>2019 — Present</strong>
            <span>Education journey</span>
          </div>
          <div className="edu__stat">
            <strong>BSc · Running</strong>
            <span>Current degree</span>
          </div>
        </div>

        <ol className="edu">
          {education.map((item, i) => (
            <li
              className="edu__item reveal"
              style={{ '--reveal-delay': `${i * 110}ms` }}
              key={item.institution}
            >
              <span className="edu__marker" aria-hidden="true" />
              <article className={`edu__card${item.status === 'Currently pursuing' ? ' edu__card--current' : ''}`}>
                <span className="edu__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="edu__mono" aria-hidden="true">
                  {item.monogram}
                </span>

                <div className="edu__main">
                  <div className="edu__top">
                    <h3 className="edu__school">{item.institution}</h3>
                    <span className={`edu__status${item.status === 'Currently pursuing' ? ' edu__status--current' : ''}`}>
                      {item.status === 'Currently pursuing' && <i aria-hidden="true" />}
                      {item.status}
                    </span>
                  </div>

                  <p className="edu__degree">{item.degree}</p>

                  <div className="edu__foot">
                    <span className="edu__level">{item.level}</span>
                    {item.meta && <span className="edu__meta">{item.meta}</span>}
                    <span className="edu__place">
                      <Icon name="pin" />
                      {item.location}
                    </span>
                    <span className="edu__period">{item.period}</span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
