/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, Fragment } from 'react'
import { Dialog, Combobox, Transition } from '@headlessui/react'
import CloseButton from './buttons/CloseButton'

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
          <Dialog.Overlay className="absolute inset-0 bg-gray-800/95" />
          {/* Start of About me */}
          <div className=" flex flex-wrap items-center justify-center ">
            <div className="easy-in-out container max-w-3xl transform rounded-lg bg-white shadow-lg duration-200 dark:bg-gray-800">
              <div className="h-48 overflow-hidden sm:h-64 ">
                <img
                  className="w-full rounded-t"
                  src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Photo by aldi sigun on Unsplash"
                />
                <CloseButton closeModal={closeModal} />
              </div>
              <div className="-mt-12 mb-5 flex flex-row justify-start px-5">
                <span clspanss="block relative h-34 w-34">
                  <img
                    alt="Photo by aldi sigun on Unsplash"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    className="mx-auto h-28 w-28 rounded-full bg-white object-cover p-1"
                  />
                </span>
                <div className="mt-12 pl-4 ">
                  <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    Michael Le
                  </h2>
                  <p className=" text-gray-400 dark:text-gray-400">Illustrator</p>
                </div>
              </div>
              <div className="">
                <div className="mb-8 px-7">
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores molestiae
                    vitae odio non commodi itaque quisquam incidunt doloribus fugit nesciunt.
                  </p>
                  <div className="mx-auto mt-8 max-w-min cursor-pointer justify-center rounded-lg bg-primary-600 px-4 py-2 text-gray-100 hover:bg-primary-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
                    bethprimarye@gmail.com
                  </div>
                  <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                    <button className="inline-flex items-center p-1 text-primary-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-gray-300 sm:p-2">
                      <svg
                        className="h-7 w-7 fill-current"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button className="inline-flex items-center p-1 text-primary-600 hover:text-primary-700 dark:text-gray-400 dark:hover:text-gray-300 sm:p-2">
                      <svg
                        className="h-7 w-7 fill-current"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                      </svg>
                    </button>
                    <button className="dark:hover:text-gray-30 inline-flex items-center p-1  text-primary-600 hover:text-primary-700 dark:text-gray-400  dark:hover:text-gray-300 sm:p-2">
                      <svg
                        className="h-7 w-7 fill-current"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                      </svg>
                    </button>
                    <button className="dark:hover:text-gray-30 inline-flex items-center p-1  text-primary-600 hover:text-primary-700 dark:text-gray-400  dark:hover:text-gray-300 sm:p-2">
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
                    </button>
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
