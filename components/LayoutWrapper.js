import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchBar from './SearchBar'
import SideBarLeft from './SideBarLeft'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-full flex-col items-center justify-between ">
        <header className="sticky top-0 z-50 mx-auto flex w-screen items-center justify-between py-2 px-6 backdrop-blur-lg backdrop-filter md:px-16 ">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Logo />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
          <div className="flex items-center text-base leading-5">
            {/* <SearchBar posts={[]} /> */}
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <div className="grid max-w-screen-2xl grid-cols-10 px-2 md:px-16">
          <SideBarLeft className="col-span-2 mr-10" />
          <main className="col-span-10 mb-auto md:col-span-8">{children}</main>
        </div>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper