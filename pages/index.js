import { useState } from 'react'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Pagination from '@/components/Pagination'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import SearchPalette from '@/components/SearchPalette'
import Warning from '@/components/Warning'

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
      <div className="divide-y divide-gray-200 px-6 dark:divide-gray-700">
        <div className="flex flex-row justify-between pb-1 ">
          <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
            All posts
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
              Lastest
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 pt-2 md:grid-cols-2">
          {!posts.length && 'No posts found.'}
          {sortedPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <div key={slug} className="">
                <div className=" py-2 md:p-4 ">
                  <div className="w-full cursor-pointer overflow-hidden rounded bg-gray-200 p-4  shadow-lg hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
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
