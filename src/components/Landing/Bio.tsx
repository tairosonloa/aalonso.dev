import React, { FC } from 'react'
import Emoji from '../Emoji'

const Bio: FC = () => {
  return (
    <div className="flex flex-col space-y-12 divide-y divide-gray-200 mb-24 ">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-100  sm:leading-10   md:leading-14">
          Hi, I&apos;m Aitor <Emoji emoji="👋" label="waving hand" />
        </h1>
        <p className="mt-3 mb-6 md:mb-7 sm:w-9/12 text-gray-300 md:w-10/12 lg:w-full text-base md:text-lg font-medium ">
          I&apos;m a full-stack developer <Emoji emoji="👨‍💻" label="man with a computer" /> from
          Spain. Free software contributor <Emoji emoji="❤️" label="hearth" />, Linux fan{' '}
          <Emoji emoji="🐧" label="penguin" /> and DevOps <Emoji emoji="⚙️" label="gear" /> soul.
        </p>
      </div>
    </div>
  )
}

export default Bio
