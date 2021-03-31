import React, { FC } from 'react'
import Emoji from '../Emoji'

const Bio: FC = () => {
  return (
    <div className="flex flex-col space-y-12 divide-y divide-gray-200 mb-24">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-100  sm:leading-10   md:leading-14">
          Hi, I&apos;m Aitor <Emoji emoji="👋" label="Waving hand" />
        </h1>
        <p className="mt-3 mb-6 md:mb-7 text-gray-300 md:w-full text-base md:text-lg font-medium">
          I&apos;m a full-stack software engineer <Emoji emoji="👨🏻‍💻" label="Man with a computer" />{' '}
          who uses Domain Driven Design and Clean Architectures to build fast{' '}
          <Emoji emoji="⚡" label="Lightning" />, efficient and reliable back-end APIs.
        </p>
      </div>
    </div>
  )
}

export default Bio
