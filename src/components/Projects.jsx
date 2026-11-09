import { wpProjects } from '../data/content'
import SectionHead from './SectionHead'
import Icon from './Icons'
import w1Comms from '../assets/projects/full/w1-comms.jpg'
import fighttmj from '../assets/projects/full/fighttmj.jpg'
import dietplus78 from '../assets/projects/full/dietplus78.jpg'
import stopbailiff from '../assets/projects/full/stopbailiff.jpg'
import vinceLandscaping from '../assets/projects/full/vince-landscaping.jpg'
import meridianInstitute from '../assets/projects/full/meridian-institute.jpg'
import baranaTravel from '../assets/projects/full/barana-travel.jpg'
import allureMgmt from '../assets/projects/full/allure-mgmt.jpg'
import santamariaElectrical from '../assets/projects/full/santamaria-electrical.jpg'
import crewgrapevine from '../assets/projects/full/crewgrapevine.jpg'
import laundryLady from '../assets/projects/full/laundry-lady.jpg'
import boyleLitigation from '../assets/projects/full/boyle-litigation.jpg'
import './Projects.css'

/* Full-page screenshot per project (900px-wide JPEGs, captured 2026-11-09). */
const shots = {
  'w1-comms': w1Comms,
  fighttmj,
  dietplus78,
  stopbailiff,
  'vince-landscaping': vinceLandscaping,
  'meridian-institute': meridianInstitute,
  'barana-travel': baranaTravel,
  'allure-mgmt': allureMgmt,
  'santamaria-electrical': santamariaElectrical,
  crewgrapevine,
  'laundry-lady': laundryLady,
  'boyle-litigation': boyleLitigation,
}

/* Hover-scroll speed: the screenshot glides at ~600 CSS px per second,
   so a long page takes longer than a short one. Clamped 4–14s.
   0.422 ≈ desktop card width (380px) / image width (900px). */
function scrollDuration(shotH) {
  const distance = shotH * 0.422 - 300
  return Math.min(14, Math.max(4, Math.round(distance / 600)))
}

function ProjectCard({ project }) {
  return (
    <article className="card">
      <div
        className="card__media"
        style={{ '--shot-dur': `${scrollDuration(project.shotH)}s` }}
      >
        <img
          src={shots[project.shot]}
          alt={`${project.title} — full page preview`}
          loading="lazy"
        />
        <span className="card__category">{project.category}</span>
        <span className="card__scroll-hint">Hover to scroll the full page</span>
      </div>

      <div className="card__body">
        <p className="card__kind card__kind--client">{project.kind}</p>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__text">{project.description}</p>

        <ul className="card__tags">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="card__actions">
          <a
            className="btn btn--primary btn--sm"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Visit live site
            <Icon name="arrowUpRight" />
          </a>
        </div>
      </div>
    </article>
  )
}

/* One auto-moving row. The card set is rendered twice so the loop is
   seamless: the track translates exactly -50% (one full set) and repeats.
   Row 1 moves left-to-right, Row 2 right-to-left (see CSS direction). */
function MarqueeRow({ projects, direction, ariaLabel }) {
  const doubled = [...projects, ...projects]
  return (
    <div className={`marquee marquee--${direction} reveal`} aria-label={ariaLabel}>
      <div className="marquee__track">
        {doubled.map((project, i) => (
          <div
            className="marquee__item"
            key={`${project.title}-${i}`}
            aria-hidden={i >= projects.length ? 'true' : undefined}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

/* Two carousel rows, 6 projects each, 3 visible per row on desktop.
   Row 1: left-to-right. Row 2: right-to-left. */
export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          eyebrow="Selected work"
          title="WordPress projects."
          sub="Twelve WordPress sites built with Elementor — hover a card and the full page scrolls inside it, from the top to the footer. Click through to visit the live site."
        />

        <MarqueeRow
          projects={wpProjects.slice(0, 6)}
          direction="ltr"
          ariaLabel="WordPress projects, first row, moving carousel"
        />

        <MarqueeRow
          projects={wpProjects.slice(6)}
          direction="rtl"
          ariaLabel="WordPress projects, second row, moving carousel"
        />

        <p className="projects__note reveal">
          Hover a row to pause it — hover a card to scroll through the whole
          page. On a phone or tablet the preview scrolls by itself.
        </p>
      </div>
    </section>
  )
}
