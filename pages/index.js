import Link from '@/components/Link'
import ReadingTime from '@/components/ReadingTime'
import SearchPalette from '@/components/SearchPalette'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import Warning from '@/components/Warning'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { useState } from 'react'

export async function getStaticProps(context) {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  const [sortedPosts, setSortedPosts] = useState(posts)
  const [isWarningOpen, setIsWarningOpen] = useState(false)
  const [waringMessage, setWaringMessage] = useState('')
  const sortNewest = (posts) => {
    if (new Date(posts[0].date) - new Date(posts[1].date) > 0) {
      // alert('Already sorted newest')
      setIsWarningOpen(true)
      setWaringMessage('Posts have been sorted newest')
      return
    }
    setSortedPosts([
      ...posts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      }),
    ])
  }
  const sortLatest = (posts) => {
    if (new Date(posts[0].date) - new Date(posts[1].date) < 0) {
      setIsWarningOpen(true)
      setWaringMessage('Posts have been sorted latest')
      return
    }
    setSortedPosts([
      ...posts.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      }),
    ])
  }

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {/* Hero Section */}
      <div className="divide-y divide-gray-200 px-6 dark:divide-gray-700">
        <div className="py-8 md:py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
              Hey, I'm <span className="text-primary-500 dark:text-primary-400">Nerdy Mike</span>
              <span className="text-2xl sm:text-4xl"> 👋</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Remote software engineer crafting AI systems, RAG architectures, and e-commerce
              solutions from Ho Chi Minh City 🇻🇳. Currently debugging why my chess AI thinks knights
              move like Grab bikes while sipping my 4th cà phê sữa đá ☕
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                🤖 AI & Machine Learning
              </span>
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                🛒 E-commerce Optimization
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                🔍 RAG Systems
              </span>
              <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                💰 Fintech
              </span>
            </div>
          </div>
        </div>

        {/* Latest Posts Section */}
        <div className="flex flex-row justify-between pb-1 pt-8">
          <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
            Latest Adventures
          </p>
          <div className="pt-1 md:pr-2">
            <SearchPalette posts={posts} />
            <Warning isOpen={isWarningOpen} setIsOpen={setIsWarningOpen} message={waringMessage} />
            <button
              className="pr-4 text-lg text-gray-600 hover:text-gray-500 dark:text-gray-400"
              onClick={() => sortNewest(posts)}
            >
              Newest
            </button>
            <button
              className="pr-4 text-lg text-gray-600 hover:text-gray-500 dark:text-gray-400"
              onClick={() => sortLatest(posts)}
            >
              Latest
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 pt-2 md:grid-cols-2">
          {!posts.length && 'No posts found.'}
          {sortedPosts.slice(0, 6).map((frontMatter) => {
            const { slug, date, title, summary, tags = [] } = frontMatter
            return (
              <div key={slug} className="">
                <div className=" py-2 md:p-4 ">
                  <div className="w-full cursor-pointer overflow-hidden rounded bg-gray-200 p-4  shadow-lg hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center justify-between">
                          <time dateTime={date}>{formatDate(date)}</time>
                          <ReadingTime content={summary} />
                        </div>
                      </dd>
                    </dl>
                    <div className="space-y-4 xl:col-span-3">
                      <div className="space-y-4">
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>

                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-300">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
