import { useEffect, useState } from 'react'

const ViewCounterImproved = ({ slug, title }) => {
  const [views, setViews] = useState(null)

  useEffect(() => {
    if (!slug || typeof window === 'undefined') return

    const viewKey = `views_${slug}`
    const sessionKey = `session_viewed_${slug}`
    const lastViewKey = `last_view_${slug}`

    // Check if already viewed in this session
    const viewedInSession = sessionStorage.getItem(sessionKey)

    // Get current views
    const currentViews = parseInt(localStorage.getItem(viewKey) || '0', 10)
    setViews(currentViews)

    // Only count if not viewed in this session
    if (!viewedInSession) {
      // Basic bot detection: check if user has scrolled or interacted
      let hasInteracted = false

      const trackInteraction = () => {
        hasInteracted = true
        window.removeEventListener('scroll', trackInteraction)
        window.removeEventListener('click', trackInteraction)
        window.removeEventListener('keydown', trackInteraction)
      }

      window.addEventListener('scroll', trackInteraction, { passive: true })
      window.addEventListener('click', trackInteraction)
      window.addEventListener('keydown', trackInteraction)

      // Count view after 3 seconds if user has interacted or 10 seconds regardless
      const timeoutId = setTimeout(
        () => {
          if (
            hasInteracted ||
            Date.now() - parseInt(sessionStorage.getItem('session_start') || Date.now()) > 10000
          ) {
            const newViews = currentViews + 1
            localStorage.setItem(viewKey, newViews.toString())
            localStorage.setItem(lastViewKey, Date.now().toString())
            sessionStorage.setItem(sessionKey, 'true')
            setViews(newViews)
          }

          window.removeEventListener('scroll', trackInteraction)
          window.removeEventListener('click', trackInteraction)
          window.removeEventListener('keydown', trackInteraction)
        },
        hasInteracted ? 3000 : 10000
      )

      // Track session start
      if (!sessionStorage.getItem('session_start')) {
        sessionStorage.setItem('session_start', Date.now().toString())
      }

      return () => {
        clearTimeout(timeoutId)
        window.removeEventListener('scroll', trackInteraction)
        window.removeEventListener('click', trackInteraction)
        window.removeEventListener('keydown', trackInteraction)
      }
    }
  }, [slug, title])

  if (views === null) return null

  return (
    <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
      <svg
        className="mr-1 h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
      {views.toLocaleString()} views
    </span>
  )
}

export default ViewCounterImproved
