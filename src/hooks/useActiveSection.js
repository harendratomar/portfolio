import { useEffect, useState } from 'react'

export function useActiveSection(ids, enabled = true) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    if (!enabled || ids.length === 0) return undefined

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [enabled, ids])

  return activeId
}
