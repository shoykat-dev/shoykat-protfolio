import { skillGroups } from '../data/content'
import SectionHead from './SectionHead'
import Icon from './Icons'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead
          eyebrow="Skills"
          title="The stack I build with every day."
          sub="Frontend, WordPress and the tools that keep projects shipping on time."
        />

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <article
              className="skills__card glass reveal"
              style={{ '--reveal-delay': `${i * 110}ms` }}
              key={group.title}
            >
              <div className="skills__card-top">
                <span className="skills__icon">
                  <Icon name={group.icon} />
                </span>
                <span className="skills__note">{group.note}</span>
              </div>

              <h3 className="skills__title">{group.title}</h3>

              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item}>
                    <i />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
