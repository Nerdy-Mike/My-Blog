import React, { useState, useRef, Fragment } from 'react'
import { Dialog, Combobox, Transition } from '@headlessui/react'

function Warning({ message, isOpen, setIsOpen }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={() => setIsOpen(false)}
        className="fixed inset-x-0 top-0 flex w-screen items-center justify-center overflow-y-auto pt-[5vh] "
      >
        <Dialog.Overlay className="fixed inset-0  bg-gray-800/90 dark:bg-gray-500/70" />
        <Transition.Child show={isOpen} as={Fragment}>
          <div className="my-8  flex w-full max-w-sm transform flex-col items-center overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl">
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
              Oh Hi there 👋
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{message}</p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-primary-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-primary-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => setIsOpen(false)}
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default Warning
