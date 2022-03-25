/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import AboutMe from './AboutMe'

const SideBarLeft = () => {
  return (
    <div className="col-span-2 hidden min-h-screen md:block">
      <div className="col-span-2 ">
        <div className=" mt-10">
          {/* Short Bio */}
          <div className="w-full items-center justify-center font-sans ">
            <div className="card  flex w-full rounded-lg border-none px-4 pb-4 shadow-xl dark:shadow-lg dark:shadow-gray-800">
              <img
                className=" mx-auto w-24 rounded-full "
                src="https://avatars.githubusercontent.com/u/67946056?v=4"
                alt="My Avatar"
                width={100}
                height={100}
              />
              <div className=" mx-auto flex flex-col">
                <div className="text-md mt-2 text-center font-medium">Welcome</div>
                <div className=" text-center text-sm font-light">
                  <p>Cognito ergo sum</p>
                </div>
                <AboutMe />
              </div>
            </div>
          </div>
        </div>
        <nav className="pt-6">
          <div className="text-primary-500 dark:text-primary-400">Catagories</div>
          <a
            className="focus:shadow-outline mt-2 block rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
            href={`/tags/ai-ml`}
          >
            <div className="flex items-center py-1">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>artificial intelligence</title>
                <path
                  d="M106,27A23,23,0,1,0,62.45,37.33a18.45,18.45,0,0,0-9-2.33c-11,0-20,9.85-20,22a23.09,23.09,0,0,0,5.81,15.5A19.12,19.12,0,0,0,35,72c-12.7,0-23,12.54-23,28s10.3,28,23,28a19.12,19.12,0,0,0,4.31-.5A23.09,23.09,0,0,0,33.5,143c0,12.15,9,22,20,22a18.45,18.45,0,0,0,9-2.33A23,23,0,1,0,106,173c0-.34,0-0.67,0-1h0V28h0C106,27.67,106,27.34,106,27Z"
                  fill="none"
                  stroke="#220728"
                  strokeLinejoin="bevel"
                  strokeWidth="8"
                />
                <path
                  d="M67.26,189.26a23,23,0,0,0,32.53-32.53H86.9"
                  fill="none"
                  stroke="#220728"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <path
                  d="M66.26,10.74A23,23,0,0,1,98.79,43.26H87.67"
                  fill="none"
                  stroke="#220728"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <polyline
                  points="106 95 81 95 49.25 124.76"
                  fill="none"
                  stroke="#220728"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <line
                  x1="44.97"
                  y1="86.65"
                  x2="62.45"
                  y2="111.44"
                  fill="none"
                  stroke="#220728"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <line
                  x1="62.45"
                  y1="162.67"
                  x2="74.5"
                  y2="146"
                  fill="none"
                  stroke="#220728"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <polyline
                  points="62.45 37.49 71 51 71 71"
                  fill="none"
                  stroke="#220728"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <line
                  x1="152"
                  y1="100"
                  x2="104"
                  y2="100"
                  fill="none"
                  stroke="#220728"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <polyline
                  points="107 131 131 131 143 152.67"
                  fill="none"
                  stroke="#220728"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <polyline
                  points="107 70 131 70 143 48.33"
                  fill="none"
                  stroke="#220728"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <circle
                  cx="171"
                  cy="100"
                  r="16"
                  fill="none"
                  stroke="#ffc548"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <circle
                  cx="149"
                  cy="170"
                  r="16"
                  fill="none"
                  stroke="#ffc548"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
                <circle
                  cx="149"
                  cy="30"
                  r="16"
                  fill="none"
                  stroke="#ffc548"
                  strokeMiterlimit="10"
                  strokeWidth="8"
                />
              </svg>
              <span className="ml-2 text-base">&nbsp;&nbsp;&nbsp;AI/ML</span>
            </div>
          </a>
          <a
            className="focus:shadow-outline mt-2 block rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
            href={`/tags/webdev`}
          >
            <div className="flex items-center py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-code"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1={14} y1={4} x2={10} y2={20} />
              </svg>

              <span className="ml-2  text-base">&nbsp;&nbsp;&nbsp;Web dev</span>
            </div>
          </a>
          <a
            className="focus:shadow-outline mt-2 block rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
            href={`/tags/math`}
          >
            <div className="flex items-center py-1">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="#fff" height="60" rx="10" width="60" />
                <rect fill="#f1f3f4" height="44" rx="6" width="44" x="8" y="8" />
                <path
                  d="M46,53.5H14A7.508,7.508,0,0,1,6.5,46V14A7.508,7.508,0,0,1,14,6.5H46A7.508,7.508,0,0,1,53.5,14V46A7.508,7.508,0,0,1,46,53.5ZM14,9.5A4.505,4.505,0,0,0,9.5,14V46A4.505,4.505,0,0,0,14,50.5H46A4.505,4.505,0,0,0,50.5,46V14A4.505,4.505,0,0,0,46,9.5Z"
                  fill="#bf95bc"
                />
                <path
                  d="M30,53.5A1.5,1.5,0,0,1,28.5,52V8a1.5,1.5,0,0,1,3,0V52A1.5,1.5,0,0,1,30,53.5Z"
                  fill="#bf95bc"
                />
                <path d="M52,31.5H8a1.5,1.5,0,0,1,0-3H52a1.5,1.5,0,0,1,0,3Z" fill="#bf95bc" />
                <path d="M46,20.5H36a1.5,1.5,0,0,1,0-3H46a1.5,1.5,0,0,1,0,3Z" fill="#f29580" />
                <path d="M44,39.5H38a1.5,1.5,0,0,1,0-3h6a1.5,1.5,0,0,1,0,3Z" fill="#f29580" />
                <path d="M44,45.5H38a1.5,1.5,0,0,1,0-3h6a1.5,1.5,0,0,1,0,3Z" fill="#f29580" />
                <path d="M24,20.5H14a1.5,1.5,0,0,1,0-3H24a1.5,1.5,0,0,1,0,3Z" fill="#f29580" />
                <path
                  d="M19,25.5A1.5,1.5,0,0,1,17.5,24V14a1.5,1.5,0,0,1,3,0V24A1.5,1.5,0,0,1,19,25.5Z"
                  fill="#f29580"
                />
                <path
                  d="M22.536,46.036a1.5,1.5,0,0,1-1.061-.44L14.4,38.525A1.5,1.5,0,0,1,16.525,36.4L23.6,43.475a1.5,1.5,0,0,1-1.06,2.561Z"
                  fill="#f29580"
                />
                <path
                  d="M15.464,46.036a1.5,1.5,0,0,1-1.06-2.561L21.475,36.4A1.5,1.5,0,0,1,23.6,38.525L16.525,45.6A1.5,1.5,0,0,1,15.464,46.036Z"
                  fill="#f29580"
                />
                <path
                  d="M8,47.5A1.5,1.5,0,0,1,6.5,46V14A7.508,7.508,0,0,1,14,6.5H46a1.5,1.5,0,0,1,0,3H14A4.505,4.505,0,0,0,9.5,14V46A1.5,1.5,0,0,1,8,47.5Z"
                  fill="#ffafc5"
                />
              </svg>
              <span className="ml-2  text-base">&nbsp;&nbsp;&nbsp;Math</span>
            </div>
          </a>
          <a
            className="focus:shadow-outline mt-2 block rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
            href={`/tags/economics`}
          >
            <div className="flex items-center py-1">
              <svg viewBox="0 0 24 24" width={20} height={20} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14,11H13V7h2a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h1v4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Zm-3,0H10a2,2,0,0,1,0-4h1Zm3,6H13V13h1a2,2,0,0,1,0,4Z"
                  fill="#6563ff"
                />
              </svg>
              <span className="ml-2  text-base">&nbsp;&nbsp;&nbsp;Economics</span>
            </div>
          </a>
          <a
            className="focus:shadow-outline mt-2 block rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
            href={`/tags/philosophy`}
          >
            <div className="flex items-center py-1">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
              >
                <title>MobX-State-Tree</title>
                <path d="M12.4359.5918c-.5327.0013-1.073.2715-1.432.8068L.3056 17.5528c-.9402 1.9806.4223 3.8737 2.2691 4.4105 3.469.7726 6.646-1.2927 6.646-1.2927 4.68-2.9945 7.7024-4.6851 7.7024-4.6851 3.7297-1.8907 6.9926.4293 6.9995.4342L13.8248 1.3986c-.3309-.54-.8563-.808-1.389-.8068zm.0043 1.6599c.4191-.0013.8326.2102 1.093.635 2.4662 3.6608 5.2689 7.4349 7.6288 11.1616 0 0-2.252-1.1721-5.19.3173 0 0-2.3795 1.3306-6.0622 3.687 0 0-2.4992 1.6244-5.229 1.0164-1.4534-.4224-2.5263-1.9125-1.7865-3.4711l8.4195-12.7111c.2825-.4212.7072-.6342 1.1264-.6351zM20.86 16.4169c-4.0347.0998-7.5355 3.8695-10.387 4.9836 4.3352 5.2103 17.3143-.9708 12.454-4.4241-.6166-.4203-1.315-.578-2.067-.5595zm-.0247 1.0159c.5446.003 1.04.1454 1.4567.4783 2.288 2.2856-6.3047 6.2616-9.9585 3.647 1.1813-.0912 5.5606-4.1413 8.5018-4.1253Z" />
              </svg>

              <span className="ml-2  text-base">&nbsp;&nbsp;&nbsp;Philosophy</span>
            </div>
          </a>
          <a
            className="focus:shadow-outline mt-2 block rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
            href={`/tags/random`}
          >
            <div className="flex items-center py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-stack"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                <polyline points="4 12 12 16 20 12" />
                <polyline points="4 16 12 20 20 16" />
              </svg>
              <span className="ml-2  text-base">&nbsp;&nbsp;&nbsp;Random</span>
            </div>
          </a>
        </nav>
      </div>
    </div>
  )
}

export default SideBarLeft
