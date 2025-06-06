import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PageTransition = ({ children }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Handle hydration
  useEffect(() => {
    setMounted(true)
    // Ensure content is visible on initial mount
    setIsVisible(true)
    setIsLoading(false)
    setProgress(0)
  }, [])

  useEffect(() => {
    if (!mounted) return // Don't set up event listeners until mounted

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
      }, 150)
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
  }, [router, mounted])

  // Safety net to prevent stuck invisible state
  useEffect(() => {
    if (!mounted) return

    const safetyTimeout = setTimeout(() => {
      if (!isVisible && !isLoading) {
        console.warn('PageTransition: Safety check - forcing visibility')
        setIsVisible(true)
      }
    }, 3000) // Longer timeout for safety net

    return () => clearTimeout(safetyTimeout)
  }, [isVisible, isLoading, mounted])

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div>{children}</div>
  }

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
          // Ensure content is never completely hidden
          minHeight: isVisible ? 'auto' : '1px',
        }}
      >
        {children}
      </div>
    </>
  )
}

export default PageTransition
