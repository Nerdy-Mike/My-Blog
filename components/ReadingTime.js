const ReadingTime = ({ content }) => {
  const wordsPerMinute = 200 // Average reading speed

  if (!content) return null

  // Remove markdown syntax and count words
  const text = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with text
    .replace(/[#*_~`]/g, '') // Remove markdown symbols
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()

  const wordCount = text.split(' ').filter((word) => word.length > 0).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)

  return (
    <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
      <svg
        className="mr-1 h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {readingTime} min read
    </span>
  )
}

export default ReadingTime
