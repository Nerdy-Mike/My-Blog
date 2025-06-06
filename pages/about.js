import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  try {
    const authorDetails = await getFileBySlug('authors', ['default'])
    return { props: { authorDetails } }
  } catch (error) {
    console.error('Error loading author details:', error)
    return {
      props: {
        authorDetails: {
          mdxSource: '',
          frontMatter: { layout: DEFAULT_LAYOUT },
        },
      },
    }
  }
}

export default function About({ authorDetails }) {
  if (!authorDetails || !authorDetails.mdxSource || !authorDetails.frontMatter) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            About Page Error
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Unable to load author information. Please check the data/authors/default.md file.
          </p>
        </div>
      </div>
    )
  }

  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
