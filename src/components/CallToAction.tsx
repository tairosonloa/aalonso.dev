/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const CallToAction = () => {
  return (
    <div className="w-11/12 px-4 py-20 mx-auto text-center md:w-3/4 lg:w-2/4  ">
      <h2 className="mb-2 text-3xl md:text-4xl font-extrabold tracking-tight  md:mb-6 md:leading-tight">
        Get In Touch!
      </h2>
      <p className="mb-6 text-gray-300 w-5/6 sm:w-3/4 lg:w-5/6 xl:w-3/4 m-auto text-center md:font-medium ">
        Whether you have an idea for a project or just want to say hi, feel free to shoot me an email!
      </p>

      <div className="mb-0 space-x-0 md:space-x-2">
        <a
          href="mailto:prnvbirajdar@gmail.com"
          className="text-sm font-bold lg:text-base tracking-normal my-5 md:my-7 p-2.5 px-4 md:px-5 rounded ring-2 ring-gray-400 ring-opacity-50 bg-gray-900 bg-opacity-25 hover:bg-opacity-100 focus:bg-opacity-100 shadow transition"
        >
          Say Hello!
        </a>
      </div>
    </div>
  )
}

export default CallToAction
