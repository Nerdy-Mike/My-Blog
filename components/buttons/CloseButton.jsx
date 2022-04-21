import React from 'react'

const CloseButton = ({ closeModal }) => {
  return (
    <button
      type="button"
      className="focus:shadow-outline absolute top-0 right-0 z-10 m-2 inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-100  hover:text-gray-600  focus:outline-none dark:text-gray-400 hover:dark:text-gray-100"
      onClick={() => {
        closeModal()
      }}
    >
      <span className="sr-only">Close menu</span>
      {/* <!-- Heroicon name: outline/x --> */}
      <svg
        className=" h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}

export default CloseButton
