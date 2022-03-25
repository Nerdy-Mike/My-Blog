import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import SearchPalette from '@/components/SearchPalette'
import { useRouter } from 'next/router'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts
  const [sortedPosts, setSortedPosts] = useState(displayPosts)
  const sortNewest = (displayPosts) => {
    setSortedPosts([
      ...displayPosts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      }),
    ])
  }

  const sortLatest = (displayPosts) => {
    setSortedPosts([
      ...displayPosts.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      }),
    ])
  }
  return (
    <>
      <div className="divide-y divide-gray-200 px-6 dark:divide-gray-700">
        <div className="flex flex-row justify-between pb-1 ">
          <div className="flex flex-row items-end">
            <Link className="justity-center flex flex-row items-center md:pr-4" href={`/`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 176.839 286.379"
                stroke="currentColor"
                fill="gray"
              >
                <path
                  d="M185.429,258.48,76.128,148.94,185.429,39.4,151.78,5.75,8.59,148.94l143.19,143.19Z"
                  transform="translate(-8.59 -5.75)"
                />
              </svg>
              <div className="px-2">All posts </div>
            </Link>
            <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
              {title}
            </p>
          </div>

          <div className="pt-1 md:pr-2">
            <SearchPalette posts={posts} />
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
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
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
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
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
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
