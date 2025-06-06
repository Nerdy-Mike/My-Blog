import Logo from '@/data/logo.svg'
import siteMetadata from '@/data/siteMetadata'
import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import SideBarLeft from './SideBarLeft'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children, posts = [] }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-700 dark:bg-gray-900/80">
        <div className="mx-auto flex max-w-screen-2xl justify-between px-4 py-4 md:px-8">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Logo />
              </div>
            </div>
          </Link>
          <div className="flex items-center text-base leading-5">
            {/* <SearchBar posts={[]} /> */}
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-screen-2xl flex-1">
        {/* Sidebar - Fixed width, hidden on mobile */}
        <aside className="hidden w-80 flex-shrink-0 border-r border-gray-200 bg-gray-50/50 dark:border-gray-700 dark:bg-gray-800/50 lg:block">
          <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
            <SideBarLeft posts={posts} />
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1 overflow-hidden">
          <div className="px-4 py-8 md:px-8">{children}</div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default LayoutWrapper
