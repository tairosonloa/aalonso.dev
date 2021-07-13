/* eslint-disable jsx-a11y/anchor-is-valid */
import { format, parseISO } from 'date-fns'
import { GetStaticProps, NextPage } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import Link from 'next/link'
import React, { useState } from 'react'
import urlcat from 'urlcat'
import { DOMAIN } from '../constants'
import { getAllPosts } from '../libs/dev-to-api'
import { AllBlogPosts } from '../types/common'

const Blog: NextPage<AllBlogPosts> = (props) => {
  const [searchValue, setSearchValue] = useState('')

  const { devtoBlogPosts } = props

  const filteredBlogPosts = devtoBlogPosts.filter((data) => {
    const searchContent = data.title + data.description
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  const url = urlcat(`https://${DOMAIN}`, '/blog')
  const seo: NextSeoProps = {
    title: 'Blog',
    canonical: url,
    openGraph: { url },
  }

  return (
    <>
      <NextSeo {...seo} />
      <main className="w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 text-gray-300 max-w-7xl">
        <div>
          <div className="space-y-2 md:space-y-5">
            <h1 className="mb-3 lg:mb-5 text-4xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Blog
            </h1>
            <p className="sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg font-normal">
              Here is where I write down and share my new ideas and self-lessons with everyone.
            </p>
          </div>
          <div className="divide-y divide-gray-800">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <div className="relative max-w-lg">
                <input
                  aria-label="Search articles"
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search articles"
                  className="block w-full px-4 py-2 border  rounded-md border-gray-900 focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-gray-100"
                />
                <svg
                  className="absolute w-5 h-5 right-3 top-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <ul>
              {!filteredBlogPosts.length && 'No posts found.'}
              {filteredBlogPosts.map((data) => {
                // eslint-disable-next-line camelcase
                const { description, title, slug, published_at } = data
                return (
                  <li key={slug} className="pt-4 xl:py-5">
                    <article className="space-y-2 xl:grid xl:grid-cols-5 xl:space-y-0 xl:items-baseline">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-gray-400 prose text-sm md:text-base font-medium leading-6">
                          <time>{format(parseISO(published_at), 'MMMM dd, yyyy')} </time>
                        </dd>
                      </dl>
                      <div className="space-y-3 xl:col-span-4 xl:pr-20">
                        <div>
                          <h3 className="text-2xl font-bold leading-8 text-gray-100 tracking-tight">
                            <Link href={`/blog/${slug}`}>{title}</Link>
                          </h3>
                        </div>
                        <div className="text-sm md:text-base text-gray-400">
                          {description}
                          <Link href={`/blog/${slug}`}>
                            <a className="cursor-pointer ml-2 text-indigo-400 hover:text-indigo-500 inline-flex items-center">
                              Learn More
                              <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const devtoBlogPosts = await getAllPosts()

  if (!devtoBlogPosts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { devtoBlogPosts },
    revalidate: 1,
  }
}

export default Blog
