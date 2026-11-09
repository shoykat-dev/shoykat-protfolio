import { useState, useRef } from 'react'
import { wpProjects } from '../data/content'
import SectionHead from './SectionHead'
import Icon from './Icons'
import './Projects.css'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrap">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="project-card__image"
        />
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__category">{project.category}</p>
      </div>
    </article>
  )
}

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(null)

  // 12 projects: Slide 1 (1-6), Slide 2 (7-12)
  const slides = [
    wpProjects.slice(0, 6),
    wpProjects.slice(6, 12),
  ]

  const totalSlides = slides.length

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrev()
    }
    touchStartX.current = null
  }

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          eyebrow="Selected work"
          title="WordPress projects."
          sub="Twelve WordPress sites built with Elementor — custom designs crafted for diverse business needs."
        />

        <div className="projects-slider reveal">
          <button
            type="button"
            className="projects-slider__arrow projects-slider__arrow--prev"
            onClick={handlePrev}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <Icon name="arrowLeft" />
          </button>

          <div
            className="projects-slider__viewport"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="projects-slider__track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slideProjects, slideIdx) => (
                <div
                  className="projects-slider__slide"
                  key={slideIdx}
                  aria-hidden={currentSlide !== slideIdx}
                >
                  <div className="projects-grid">
                    {slideProjects.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="projects-slider__arrow projects-slider__arrow--next"
            onClick={handleNext}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next slide"
          >
            <Icon name="arrowRight" />
          </button>
        </div>
      </div>
    </section>
  )
}
