/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, Fragment } from 'react'
import { Dialog, Combobox, Transition } from '@headlessui/react'
import CloseButton from './buttons/CloseButton'
import City from '@/data/city.jpg'
import Image from 'next/image'
import Link from 'next/link'

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mx-3 mt-3 rounded-lg bg-cyan-300  py-1 dark:bg-cyan-600"
      >
        About me
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 overflow-auto p-4 pt-[15vh]"
        >
          <Dialog.Overlay className="absolute inset-0 bg-gray-700/95" />
          {/* Start of About me */}
          <div className=" flex flex-wrap items-center justify-center ">
            <div className="easy-in-out container max-w-3xl transform rounded-lg bg-white shadow-lg duration-200 dark:bg-gray-800">
              <div className="h-48 overflow-hidden rounded-lg sm:h-64 ">
                {/* <img
                  className="w-full rounded-t"
                  src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Photo by aldi sigun on Unsplash"
                /> */}
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <Image
                    alt="City image"
                    src={City}
                    layout="fill"
                    objectFit="cover"
                    className="rouned-md grayscale"
                  />
                </div>
                <CloseButton closeModal={closeModal} />
              </div>
              <div className="-mt-12 mb-5 flex flex-row justify-start px-5">
                <div className="mt-16 pl-4 ">
                  <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    Michael Le
                  </h2>
                  <p className=" text-gray-400 dark:text-gray-400">Junior Software Engineer</p>
                </div>
              </div>
              <div className="">
                <div className="mb-4 px-7">
                  <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
                    Oh hey, I'm Michael, a junior software engineer based in Sai Gon.
                    <p>This is where I write about my thinkings and learnings.</p>
                  </p>

                  <div className="mt-4 flex flex-col flex-wrap justify-center gap-2 sm:gap-4">
                    <a
                      className=" mx-auto mt-8 max-w-min cursor-pointer justify-center rounded-lg bg-primary-600 px-4 py-2 text-gray-100 hover:bg-primary-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200"
                      href="mailto:mike.thenerdy@gmail.com"
                    >
                      mike.thenerdy@gmail.com
                    </a>
                    <div className="flex items-center justify-center">
                      <Link passHref href="https://github.com/Nerdy-Mike">
                        <a
                          target="_blank"
                          className="inline-flex items-center p-1 text-primary-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-gray-300 sm:p-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            className="h-7 w-7 fill-current"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </Link>
                      <Link passHref href="https://www.linkedin.com/in/michael-le-0b2a44232/">
                        <a
                          target="_blank"
                          className="inline-flex items-center p-1 text-primary-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-gray-300 sm:p-2"
                        >
                          <svg
                            className="h-7 w-7 fill-current"
                            role="img"
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                            </g>
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End About me */}
        </Dialog>
      </Transition>
    </>
  )
}

export default AboutMe
