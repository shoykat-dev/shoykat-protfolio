import { useEffect, useState } from 'react'
import './Preloader.css'

/** Prothom load er somoy chhoto loading animation. */
export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let value = 0
    const tick = setInterval(() => {
      value = Math.min(100, value + Math.random() * 18 + 8)
      setProgress(Math.round(value))
      if (value >= 100) {
        clearInterval(tick)
        setTimeout(() => {
          setHidden(true)
          onDone?.()
        }, 420)
      }
    }, 140)
    return () => clearInterval(tick)
  }, [onDone])

  return (
    <div className={`preloader${hidden ? ' preloader--hidden' : ''}`} aria-hidden={hidden}>
      <div className="preloader__inner">
        <span className="preloader__mark">SH</span>
        <div className="preloader__bar">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <span className="preloader__count">{progress}%</span>
      </div>
    </div>
  )
}
