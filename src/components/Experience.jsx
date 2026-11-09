import { experience } from '../data/content'
import SectionHead from './SectionHead'
import Icon from './Icons'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead eyebrow="Experience" title="Professional journey." />

        <ol className="timeline">
          {experience.map((job, i) => (
            <li className="timeline__item reveal" style={{ '--reveal-delay': `${i * 120}ms` }} key={job.company}>
              <span className="timeline__period">{job.period}</span>

              <div className="timeline__body">
                <span className="timeline__dot" aria-hidden="true" />
                <h3 className="timeline__role">{job.role}</h3>
                <p className="timeline__company">{job.company}</p>

                <ul className="timeline__points">
                  {job.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
