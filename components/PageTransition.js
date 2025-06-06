import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PageTransition = ({ children }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let progressInterval
    let progressTimeout

    const handleStart = (url) => {
      // Only hide content if it's actually a different page
      if (url !== router.asPath) {
        setIsLoading(true)
        setIsVisible(false)
        setProgress(0)

        // Simulate progress
        progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 90) return prev
            return prev + Math.random() * 15
          })
        }, 200)
      }
    }

    const handleComplete = (url) => {
      setProgress(100)

      // Clear any existing timeout and interval
      if (progressTimeout) clearTimeout(progressTimeout)
      if (progressInterval) clearInterval(progressInterval)

      progressTimeout = setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
        setIsVisible(true)
      }, 150) // Reduced timeout for faster response
    }

    const handleError = (err, url) => {
      console.warn('Route change error:', err)
      setProgress(100)

      // Clear any existing timeout and interval
      if (progressTimeout) clearTimeout(progressTimeout)
      if (progressInterval) clearInterval(progressInterval)

      // Immediately show content on error to prevent blank page
      setIsLoading(false)
      setProgress(0)
      setIsVisible(true)
    }

    // Ensure content is visible on initial load
    setIsVisible(true)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleError)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleError)
      if (progressInterval) clearInterval(progressInterval)
      if (progressTimeout) clearTimeout(progressTimeout)
    }
  }, [router])

  // Fallback effect to ensure content is visible if no navigation is happening
  useEffect(() => {
    if (!isLoading && !isVisible) {
      const fallbackTimeout = setTimeout(() => {
        console.warn('PageTransition: Forcing visibility due to stuck state')
        setIsVisible(true)
      }, 1000) // Increased timeout but added warning

      return () => clearTimeout(fallbackTimeout)
    }
  }, [isLoading, isVisible])

  // Additional safety check to prevent permanent blank state
  useEffect(() => {
    const safetyCheck = setTimeout(() => {
      if (!isVisible && !isLoading) {
        console.warn('PageTransition: Safety check triggered, making content visible')
        setIsVisible(true)
      }
    }, 2000)

    return () => clearTimeout(safetyCheck)
  }, [router.asPath]) // Trigger on route changes

  return (
    <>
      {/* Progress Bar */}
      <div
        className={`fixed top-0 left-0 z-[100] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: `${progress}%` }}
      />

      {/* Page Content with Transition */}
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          // Fallback style to ensure content is never completely hidden
          minHeight: isVisible ? 'auto' : '1px',
        }}
      >
        {children}
      </div>
    </>
  )
}

export default PageTransition
