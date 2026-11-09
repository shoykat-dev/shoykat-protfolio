import { useEffect } from 'react'

/**
 * Page er shob `.reveal` element scroll e ashle fade + slide up hobe.
 * Off korte chaile: App.jsx theke ei hook er call ta comment kore dao.
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 }
    )
    /* threshold 0 (age chilo 0.12): lomba section — jemon 2-column
       projects grid mobile e 6511px — kokhono 12% visible hote pare na,
       tai reveal hotoi na. 0 mane viewport e dhuklei reveal hobe. */

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
