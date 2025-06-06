/* eslint-disable @next/next/no-img-element */
import City from '@/data/city.jpg'
import Image from 'next/image'
import AboutMe from './AboutMe'

const SideBarLeft = () => {
  return (
    <div className="p-6">
      {/* Short Bio */}
      <div className="mb-8 w-full items-center justify-center font-sans">
        <div className="card flex w-full rounded-lg border-none px-4 pb-4 shadow-xl dark:shadow-lg dark:shadow-gray-800">
          <Image
            className="mx-auto rounded-full object-cover"
            src="https://avatars.githubusercontent.com/u/82449028?v=4"
            alt="My Avatar"
            width={100}
            height={100}
          />

          <div className="mx-auto flex flex-col">
            <div className="text-md mt-2 text-center font-medium">Welcome</div>
            <div className="text-center text-sm font-light">
              <p>Cognito ergo sum</p>
            </div>
            <AboutMe CoverImage={City} />
          </div>
        </div>
      </div>

      <nav>
        <div className="mb-4 text-primary-500 dark:text-primary-400">Categories</div>
        {/* AI/ML */}
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
            <span className="ml-2 text-base">AI/ML</span>
          </div>
        </a>

        {/* Web dev */}
        <a
          className="focus:shadow-outline mt-2 block rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
          href={`/tags/web-dev`}
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
            <span className="ml-2 text-base">Web Dev</span>
          </div>
        </a>

        {/* Technical */}
        <a
          className="focus:shadow-outline mt-2 block rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
          href={`/tags/technical`}
        >
          <div className="flex items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2,17 12,22 22,17" />
              <polyline points="2,12 12,17 22,12" />
            </svg>
            <span className="ml-2 text-base">Technical</span>
          </div>
        </a>

        {/* Projects */}
        <a
          className="focus:shadow-outline mt-2 block rounded-lg bg-gray-200 px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white"
          href={`/projects`}
        >
          <div className="flex items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span className="ml-2 text-base">Projects</span>
          </div>
        </a>

        {/* All Posts */}
        <a
          className="focus:shadow-outline mt-2 block rounded-lg bg-primary-200 px-4 py-2 text-base font-semibold text-primary-900 hover:bg-primary-300 hover:text-primary-900 focus:bg-primary-200 focus:text-primary-900 focus:outline-none dark:bg-primary-700 dark:text-primary-200 dark:hover:bg-primary-600 dark:hover:text-white dark:focus:bg-primary-600 dark:focus:text-white"
          href={`/blog`}
        >
          <div className="flex items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span className="ml-2 text-base">All Posts</span>
          </div>
        </a>
      </nav>
    </div>
  )
}

export default SideBarLeft
