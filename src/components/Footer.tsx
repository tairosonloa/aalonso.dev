import React, { FC } from 'react'
import ScrollToTop from '../containers/scrollToTop'
import SocialMediaLinks from './Icons/Icons'

const Footer: FC = () => {
  return (
    <div className="footer w-full mt-8 bg-gradient-to-b from-transparent to-gray-800">
      <ScrollToTop />
      <footer className="flex flex-col sm:flex-row sm:w-11/12 md:w-3/4 lg:w-2/4 m-auto sm:justify-between items-center w-full">
        <SocialMediaLinks />
        <p className="text-sm mb-6 sm:mb-4 text-gray-400 sm:self-center">
          &copy; 2020-{new Date().getFullYear()} Aitor Alonso
        </p>
      </footer>
    </div>
  )
}

export default Footer
