import { useEffect, useState } from 'react'

/** Scroll position onujayi navbar e kon menu active hobe seta thik kore. */
export default function useActiveSection(ids = []) {
  const [active, setActive] = useState(ids[0] || '')

  useEffect(() => {
    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.32
      let current = ids[0]
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      })
      // page er ekdom niche gele last section active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}
