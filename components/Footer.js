import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="w-screen">
      <div className="mx-12 mt-16 flex flex-col items-center border-t border-gray-200 dark:border-gray-700">
        <div className="mb-3 flex space-x-4 pt-8 ">
          <SocialIcon
            className="hover:text-primary-500"
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size="6"
          />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="text-md mb-2 flex space-x-2 text-gray-600 dark:text-gray-400">
          <Link href="/">{siteMetadata.author}</Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="text-md mb-8  text-center text-gray-600 dark:text-gray-400 ">
          I’m not interested in great, I want to know who its Daddy is. - H.S
        </div>
      </div>
    </footer>
  )
}
