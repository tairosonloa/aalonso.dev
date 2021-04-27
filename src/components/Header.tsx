/* eslint-disable jsx-a11y/anchor-is-valid */
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { FC, useState } from 'react'

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navMenu = [
    { text: 'Home', page: '/' },
    { text: 'Blog', page: '/blog' },
    { text: 'About', page: '/about' },
  ]

  return (
    <header className="fixed top-0 w-full z-20">
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  {navMenu.map((item) => (
                    <Link href={item.page} key={item.text}>
                      <a className="hover:bg-gray-800 focus:bg-gray-800 px-3 py-2 rounded-md text-sm lg:text-base font-medium">
                        {item.text}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-transparent"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {!isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu --> */}
        <Transition
          show={isOpen}
          enter="linear duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="linear duration-100 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="h-screen flex flex-col items-center pt-14 md:hidden" id="mobile-menu">
              {navMenu.map((item) => (
                <div onClick={() => setIsOpen(!isOpen)} aria-hidden="true" key={item.text}>
                  <Link href={item.page}>
                    <a className="hover:bg-gray-800 focus:bg-gray-800 block px-3 py-2 rounded-md text-xl font-medium mb-6">
                      {item.text}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </Transition>
      </nav>
    </header>
  )
}

export default Header
