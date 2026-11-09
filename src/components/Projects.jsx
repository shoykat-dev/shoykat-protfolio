import { useState, useEffect, useRef } from 'react'
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
  const count = wpProjects.length // 12
  // Triple the list for a seamless infinite loop in both directions
  const extendedProjects = [...wpProjects, ...wpProjects, ...wpProjects]

  // Start at the middle set (index 12)
  const [currentIndex, setCurrentIndex] = useState(count)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)

  // Auto-slide every 5.5 seconds (between 5-6s), one card at a time
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
    }, 5500)

    return () => clearInterval(timer)
  }, [isPaused])

  // Seamless reset without transition when wrapping around
  const handleTransitionEnd = () => {
    if (currentIndex >= count * 2) {
      setIsTransitioning(false)
      setCurrentIndex((prev) => prev - count)
    } else if (currentIndex < count) {
      setIsTransitioning(false)
      setCurrentIndex((prev) => prev + count)
    }
  }

  // Re-enable transition on the next frame after silent reset
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true)
        })
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [isTransitioning])

  const handlePrev = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
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

        <div
          className="projects-slider reveal"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <button
            type="button"
            className="projects-slider__arrow projects-slider__arrow--prev"
            onClick={handlePrev}
            aria-label="Previous project"
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
              onTransitionEnd={handleTransitionEnd}
              style={{
                '--slide-index': currentIndex,
                transition: isTransitioning
                  ? 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
                  : 'none',
              }}
            >
              {extendedProjects.map((project, idx) => (
                <div
                  className="projects-slider__item"
                  key={`${project.title}-${idx}`}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="projects-slider__arrow projects-slider__arrow--next"
            onClick={handleNext}
            aria-label="Next project"
          >
            <Icon name="arrowRight" />
          </button>
        </div>
      </div>
    </section>
  )
}
