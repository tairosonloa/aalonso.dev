import React, { FC } from 'react'
import Icons from './Icons/Icons'

const Footer: FC = () => {
  return (
    <footer className="flex flex-col sm:flex-row sm:w-11/12 md:w-3/4 lg:w-2/4 m-auto sm:justify-between items-center w-full">
      <Icons />
      <p className="text-sm mb-6 sm:mb-4 text-gray-400 sm:self-center">
        &copy; 2020-{new Date().getFullYear()} Aitor Alonso
      </p>
    </footer>
  )
}

export default Footer
