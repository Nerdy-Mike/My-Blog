import '@/css/prism.css'
import '@/css/tailwind.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from '@/components/analytics'
import { ClientReload } from '@/components/ClientReload'
import LayoutWrapper from '@/components/LayoutWrapper'
import PageTransition from '@/components/PageTransition'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <PageTransition>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </PageTransition>
    </ThemeProvider>
  )
}
