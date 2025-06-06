import formatDate from '@/lib/utils/formatDate'
import Link from './Link'
import Tag from './Tag'

const PopularPosts = ({ posts = [], limit = 3 }) => {
  if (posts.length === 0) return null

  // Just show the most recent posts instead of view-based popularity
  const recentPosts = posts.slice(0, limit)

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
        📚 Recent Posts
      </h3>
      <div className="space-y-4">
        {recentPosts.map((post, index) => (
          <div key={post.slug} className="group">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                  {index + 1}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block text-sm font-medium text-gray-900 hover:text-primary-600 group-hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400 dark:group-hover:text-primary-400"
                >
                  {post.title}
                </Link>
                <div className="mt-1 flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularPosts
