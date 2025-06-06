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

    const handleStart = () => {
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

    const handleComplete = () => {
      setProgress(100)

      progressTimeout = setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
        setIsVisible(true)
      }, 200)
    }

    const handleError = () => {
      setProgress(100)
      progressTimeout = setTimeout(() => {
        setIsLoading(false)
        setProgress(0)
        setIsVisible(true)
      }, 200)
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
  }, [router])

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
      >
        {children}
      </div>
    </>
  )
}

export default PageTransition
