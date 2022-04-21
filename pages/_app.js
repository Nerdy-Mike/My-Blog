import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import React from 'react'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

import { useRouter } from 'next/router'
import LoaderMain from '@/components/skeletonLoader/loaderMain'
import LoaderPage from '@/components/skeletonLoader/loaderPage'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [pageLoading, setPageLoading] = React.useState(false)
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true)
    }
    const handleComplete = () => {
      setPageLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        {pageLoading ? (
          router.pathname == '/' ? (
            <LoaderPage />
          ) : (
            <LoaderMain />
          )
        ) : (
          <Component {...pageProps} />
        )}
      </LayoutWrapper>
    </ThemeProvider>
  )
}
