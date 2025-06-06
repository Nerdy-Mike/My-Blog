import { useEffect, useRef, useState } from 'react'

export const useHeadingsObserver = (selector = 'h1, h2, h3, h4') => {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')
  const observerRef = useRef()

  useEffect(() => {
    // Find all headings in the document
    const headingElements = Array.from(document.querySelectorAll(selector)).filter(
      (heading) => heading.id
    )

    if (headingElements.length === 0) {
      setHeadings([])
      return
    }

    // Create headings array with proper structure
    const headingsData = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent.trim(),
      level: parseInt(heading.tagName.charAt(1)),
      element: heading,
    }))

    setHeadings(headingsData)

    // Create intersection observer for scroll tracking
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Get all visible entries sorted by their position
        const visibleEntries = entries
          .filter((entry) => entry.intersectionRatio > 0)
          .sort((a, b) => {
            const aTop = a.boundingClientRect.top
            const bTop = b.boundingClientRect.top
            return aTop - bTop
          })

        // Set the first visible heading as active, or the one closest to the top
        if (visibleEntries.length > 0) {
          const targetEntry = visibleEntries[0]
          if (targetEntry.intersectionRatio > 0.1) {
            setActiveId(targetEntry.target.id)
          }
        }
      },
      {
        rootMargin: '-20% 0% -80% 0%',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    // Observe all headings
    headingElements.forEach((heading) => {
      observerRef.current.observe(heading)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [selector])

  return { headings, activeId }
}

export const scrollToHeading = (id, offset = 100) => {
  const element = document.getElementById(id)
  if (element) {
    const elementPosition = element.offsetTop
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
