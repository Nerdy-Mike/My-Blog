import { scrollToHeading, useHeadingsObserver } from '@/lib/useHeadingsObserver'

const FloatingTOC = () => {
  const { headings, activeId } = useHeadingsObserver('h1, h2, h3, h4')

  const getIndentClass = (level) => {
    switch (level) {
      case 1:
        return 'ml-0'
      case 2:
        return 'ml-3'
      case 3:
        return 'ml-6'
      case 4:
        return 'ml-9'
      default:
        return 'ml-0'
    }
  }

  const getFontSizeClass = (level) => {
    switch (level) {
      case 1:
        return 'text-sm font-semibold'
      case 2:
        return 'text-sm'
      case 3:
        return 'text-xs'
      case 4:
        return 'text-xs'
      default:
        return 'text-sm'
    }
  }

  // Only show if there are 2 or more headings
  if (headings.length < 2) {
    return null
  }

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden max-h-[60vh] w-64 -translate-y-1/2 transform xl:block">
      {/* Glass morphism container */}
      <div className="rounded-xl border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-gray-900/80">
        <h3 className="mb-3 text-sm font-bold text-gray-900 dark:text-gray-100">
          Table of Contents
        </h3>

        <div className="max-h-96 overflow-y-auto">
          <nav>
            <ul className="space-y-1">
              {headings.map((heading) => (
                <li key={heading.id} className={`relative ${getIndentClass(heading.level)}`}>
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`block w-full text-left transition-all duration-200 ease-in-out hover:text-blue-600 dark:hover:text-blue-400 ${getFontSizeClass(
                      heading.level
                    )} ${
                      activeId === heading.id
                        ? 'font-semibold text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <span className="block truncate py-1">{heading.text}</span>
                  </button>

                  {/* Active indicator line */}
                  {activeId === heading.id && (
                    <div className="absolute -left-2 top-1/2 h-4 w-1 -translate-y-1/2 transform rounded-full bg-blue-500" />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default FloatingTOC
