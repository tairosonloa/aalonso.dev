/* eslint-disable jsx-a11y/anchor-is-valid */
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { FC, useState } from 'react'

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-20">
      <nav className="border-b border-gray-800">
        <div className="max-w-screen-lg 4xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div
                className="flex-shrink-0 cursor-pointer"
                onKeyPress={() => setIsOpen(false)}
                onClick={() => setIsOpen(false)}
                role="button"
                tabIndex={0}
              >
                <Link href="/">
                  <a aria-label="Logo" className="text-3xl md:text-4xl font-bold">
                    aalonso
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="hover:bg-gray-800 transition focus:bg-gray-800 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                      Home
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a className="hover:bg-gray-800 transition focus:bg-gray-800 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                      Blog
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="hover:bg-gray-800 transition focus:bg-gray-800 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                      About
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
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
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in-out duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          {(ref) => (
            <div className="border-b border-gray-600 md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
                  <Link href="/">
                    <a className="hover:bg-gray-800 transition focus:bg-gray-800 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                      Home
                    </a>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
                  <Link href="/blog">
                    <a className="hover:bg-gray-800 transition focus:bg-gray-800 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                      Blog
                    </a>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
                  <Link href="/about">
                    <a className="hover:bg-gray-800 transition focus:bg-gray-800 block px-3 py-2 rounded-md text-sm md:text-base font-medium">
                      About
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  )
}

export default Header
