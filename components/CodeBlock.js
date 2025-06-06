import { useState } from 'react'

const CodeBlock = ({ children, className, ...props }) => {
  const [copied, setCopied] = useState(false)

  // Extract language from className (e.g., "language-javascript" -> "javascript")
  const language = className?.replace(/language-/, '') || 'text'

  // Get the code content
  const code = children?.props?.children || children

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
      {/* Header with language and copy button */}
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2 dark:bg-gray-700">
        <span className="text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-300">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 rounded bg-white px-2 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-50 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
        >
          {copied ? (
            <>
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBlock
