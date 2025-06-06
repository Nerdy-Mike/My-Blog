import { useEffect, useState } from 'react'

const PageTransition = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div>{children}</div>
  }

  return <>{children}</>
}

export default PageTransition
