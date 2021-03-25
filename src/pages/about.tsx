import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Icons from '../components/Icons/Icons'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Put your description here." />
      </Head>
      <section className="w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 text-gray-300">
        <div className="divide-y divide-gray-800">
          <div className=" space-y-2 md:space-y-5">
            <h1 className="pb-3 lg:pb-1 lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              About Me
            </h1>
          </div>
          <div className="items-start space-y-2 lg:grid lg:grid-cols-3 lg:space-y-0 lg:pt-4">
            <div className="flex flex-col items-center pt-6 xl:pt-5">
              <img src="/me.png" alt="avatar" className="w-48 h-48 rounded-xl" />
              <h3 className="pt-4 text-2xl md:text-3xl font-bold leading-8 tracking-tight">Aitor Alonso</h3>
              <div className="md:text-lg text-gray-400 mb-2 md:mt-1">Full-stack developer</div>
              <Icons />
            </div>
            <div className="lg:pt-4 pb-8 lg:col-span-2 text-base font-normal sm:w-9/12 md:w-10/12 mx-auto  lg:mx-0">
              <p className="mb-4">Hello! I&apos;m Aitor, a full-stack developer from Spain.</p>
              <p className="mb-4">Blah blah blah</p>
              <p className="mb-4">Here are a few technologies I&apos;ve been working with recently:</p>
              <ul className="md:flex ">
                <div>
                  <li className="mb-0.25">▸ React</li>
                  <li className="mb-0.25">▸ TypeScript</li>
                  <li className="mb-0.25">▸ JavaScript</li>
                </div>

                <div className="md:ml-20">
                  <li className="mb-0.25">▸ Firebase</li>
                  <li className="mb-0.25">▸ Semantic HTML</li>
                  <li className="mb-0.25">▸ (S)CSS</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
