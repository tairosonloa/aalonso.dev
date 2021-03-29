import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import { DOMAIN, SiteMetadata } from '../../site.metadata'
import SocialMediaLinks from '../components/Icons/Icons'

const About: NextPage = () => {
  const url = `https://${DOMAIN}/about`
  const seo: typeof SiteMetadata.seo = {
    title: 'About',
    canonical: url,
    openGraph: { url },
  }
  const { employerInfo } = SiteMetadata

  return (
    <>
      <NextSeo {...seo} />
      <main className="w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 text-gray-300">
        <div className="divide-y divide-gray-800">
          <div className=" space-y-2 md:space-y-5">
            <h1 className="pb-3 lg:pb-1 lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              About Me
            </h1>
          </div>
          <div className="items-start space-y-2 lg:grid lg:grid-cols-3 lg:space-y-0 lg:pt-4">
            <div className="flex flex-col items-center pt-6 xl:pt-5">
              <img src="/images/me.png" alt="avatar" className="w-48 h-48 rounded-xl" />
              <h3 className="pt-4 text-2xl md:text-3xl font-bold leading-8 tracking-tight">
                Aitor Alonso
              </h3>
              <div className="md:text-lg text-gray-400 mb-2 md:mt-1">Software engineer</div>
              <SocialMediaLinks />
            </div>
            <div className="lg:pt-4 pb-8 lg:col-span-2 text-base font-normal sm:w-9/12 md:w-10/12 mx-auto  lg:mx-0">
              <p className="mb-4">
                Hello! I&apos;m Aitor, a full-stack software engineer from Spain.
              </p>
              <p className="mb-4">
                I&apos;m currently full-time working for{' '}
                <a
                  className="cursor-pointer text-blue-500 hover:underline"
                  href={employerInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {employerInfo.name}
                </a>
                , where I mostly develop back-end APIs using Domain Driven Design and Clean
                Architectures. At the same time, I&apos;m studying for a Master&apos;s Degree in
                Computer Science and Engineering at{' '}
                <a
                  className="cursor-pointer text-blue-500 hover:underline"
                  href="https://www.uc3m.es/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UC3M
                </a>{' '}
                university.
              </p>
              <p className="mb-4">
                I consider myself a proactive and vocational developer, so I&apos;m always searching
                for new technologies and projects. I also am a free software contributor and Linux
                fan.
              </p>
              <p className="mb-4">
                Here are a few technologies I&apos;ve been working with recently:
              </p>
              <ul className="md:flex ">
                <div>
                  <li className="mb-0.25">▸ TypeScript</li>
                  <li className="mb-0.25">▸ Node.js</li>
                  <li className="mb-0.25">▸ Nest.js</li>
                  <li className="mb-0.25">▸ Docker</li>
                </div>
                <div className="md:ml-20">
                  <li className="mb-0.25">▸ React</li>
                  <li className="mb-0.25">▸ Next.js</li>
                  <li className="mb-0.25">▸ React Native</li>
                  <li className="mb-0.25">▸ Expo</li>
                </div>
                <div className="md:ml-20">
                  <li className="mb-0.25">▸ AWS</li>
                  <li className="mb-0.25">▸ Jenkins</li>
                  <li className="mb-0.25">▸ GitHub Actions</li>
                  <li className="mb-0.25">▸ Gitlab CI</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
