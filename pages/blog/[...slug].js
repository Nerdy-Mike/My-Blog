import { MDXLayoutRenderer } from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import SearchPalette from '@/components/SearchPalette'
import generateRss from '@/lib/generate-rss'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import fs from 'fs'
import { useRouter } from 'next/router'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getStaticPaths() {
  const posts = getFiles('blog')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  try {
    const allPosts = await getAllFilesFrontMatter('blog')
    const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'))
    const prev = allPosts[postIndex + 1] || null
    const next = allPosts[postIndex - 1] || null
    const post = await getFileBySlug('blog', params.slug.join('/'))

    if (!post || !post.frontMatter) {
      throw new Error(`Post not found or missing frontMatter: ${params.slug.join('/')}`)
    }

    const authorList = post.frontMatter.authors || ['default']
    const authorPromise = authorList.map(async (author) => {
      const authorResults = await getFileBySlug('authors', [author])
      return authorResults.frontMatter
    })
    const authorDetails = await Promise.all(authorPromise)

    // rss
    if (allPosts.length > 0) {
      const rss = generateRss(allPosts)
      fs.writeFileSync('./public/feed.xml', rss)
    }

    return { props: { allPosts, post, authorDetails, prev, next } }
  } catch (error) {
    console.error('Error in getStaticProps for blog post:', error)
    return {
      props: {
        allPosts: [],
        post: null,
        authorDetails: [],
        prev: null,
        next: null,
      },
    }
  }
}

export default function Blog({ allPosts, post, authorDetails, prev, next }) {
  const router = useRouter()

  // Add safety checks for post data
  if (!post || !post.mdxSource || !post.frontMatter) {
    return (
      <div className="divide-y divide-gray-200 px-6 dark:divide-gray-700">
        <div className="flex flex-row justify-between pb-1">
          <button
            className="text-md pt-2 tracking-tight text-gray-600 dark:text-gray-100 sm:text-lg"
            onClick={() => {
              router.back()
            }}
          >
            <div className="justity-center flex flex-row items-center">
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
              <div className="px-2">Previous</div>
            </div>
          </button>
          <div className="pt-2 pr-4">
            <SearchPalette posts={allPosts || []} />
          </div>
        </div>
        <div className="px-4 pt-8">
          <div className="text-center">
            <PageTitle>
              Blog Post Error{' '}
              <span role="img" aria-label="error">
                ❌
              </span>
            </PageTitle>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Unable to load blog post content. The post data is missing or corrupted.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const { mdxSource, toc, frontMatter } = post

  return (
    <div className="divide-y divide-gray-200 px-6 dark:divide-gray-700">
      <div className="flex flex-row justify-between pb-1">
        <button
          className="text-md pt-2 tracking-tight text-gray-600 dark:text-gray-100 sm:text-lg"
          onClick={() => {
            router.back()
          }}
        >
          <div className="justity-center flex flex-row items-center">
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

            <div className="px-2">Previous </div>
          </div>
        </button>
        <div className="pt-2 pr-4">
          <SearchPalette posts={allPosts} />
        </div>
      </div>
      <div className="px-4 pt-8">
        {frontMatter.draft !== true ? (
          <MDXLayoutRenderer
            layout={frontMatter.layout || DEFAULT_LAYOUT}
            toc={toc}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
            authorDetails={authorDetails}
            prev={prev}
            next={next}
          />
        ) : (
          <div className="mt-24 text-center">
            <PageTitle>
              Under Construction{' '}
              <span role="img" aria-label="roadwork sign">
                🚧
              </span>
            </PageTitle>
          </div>
        )}
      </div>
    </div>
  )
}
