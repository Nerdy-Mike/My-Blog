import React, { useState, useRef, Fragment, useEffect } from 'react'
import { Dialog, Combobox, Transition } from '@headlessui/react'
import Link from '@/components/Link'

const SearchPalette = ({ posts, initialDisplayPosts = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  //TODO: refactor searchValue to use useRef
  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="pr-4" aria-label="Search Pallete">
        <div className="flex flex-row">
          <svg
            className=" h-6 w-6 text-gray-600 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 overflow-y-auto p-4 pt-[20vh] "
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-800/90 dark:bg-gray-500/70" />
          <Transition.Child
            show={isOpen}
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-0 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-50 opacity-0"
          >
            <Combobox
              as="div"
              className="relative mx-auto max-w-xl divide-y divide-gray-300 rounded-lg bg-white shadow-2xl ring-1 ring-black/5 dark:divide-gray-500 dark:bg-gray-800"
              onChange={() => {
                //TODO: nagvigate user to search results
              }}
            >
              <button className="absolute right-3 top-3 h-6 w-6 text-gray-600 dark:text-gray-300">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <Combobox.Input
                aria-label="nSearch articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                autoFocus
                placeholder="Search articles ..."
                className="block h-12 w-full rounded-lg border-none border-gray-300 bg-transparent px-4 py-2  text-gray-900 focus:ring-transparent dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 "
              />
              <Combobox.Options
                className={`max-h-3/4 divide-inherit overflow-y-auto py-2${
                  searchValue.length > 0 ? '' : 'hidden'
                }`}
              >
                {displayPosts.length > 0 ? (
                  displayPosts.map((frontMatter, i) => {
                    const { slug, date, title, summary, tags } = frontMatter
                    return (
                      <Combobox.Option className="border-none" key={i}>
                        {({ active }) => (
                          <Link
                            href={`/blog/${slug}`}
                            className={`block px-4 py-2 text-sm text-gray-600 dark:text-gray-500 ${
                              active ? 'bg-gray-200 dark:bg-gray-600' : ''
                            } `}
                          >
                            <span className="text-lg font-medium">{title}</span>
                            <span className="px-2 text-gray-500 dark:text-gray-200">{`${summary.slice(
                              0,
                              40
                            )} ...`}</span>
                          </Link>
                        )}
                      </Combobox.Option>
                    )
                  })
                ) : (
                  <div className="flex flex-col justify-center ">
                    <div className="flex justify-center text-lg font-medium">No matches 👻</div>
                    <div className="text-md flex justify-center text-gray-500">
                      Try different search terms
                    </div>
                  </div>
                )}
              </Combobox.Options>
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default SearchPalette
