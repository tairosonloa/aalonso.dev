import { GetStaticProps, NextPage } from 'next'
import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'
import Bio from '../components/Landing/Bio'
import LatestArticles from '../components/Landing/LatestArticles'
import { DOMAIN } from '../constants'
import { getAllPosts } from '../libs/dev-to-api'
import { AllBlogPosts } from '../types/common'

const Home: NextPage<AllBlogPosts> = (props) => {
  const { devtoBlogPosts } = props
  const url = `https://${DOMAIN}`
  const seo: NextSeoProps = {
    canonical: url,
    openGraph: { url },
  }

  return (
    <>
      <NextSeo {...seo} />
      <main className="w-11/12 px-4 md:px-0 pt-40 md:pt-44 lg:pt-52 mx-auto xl:w-3/5 mt-0 max-w-screen-lg">
        <Bio />
        <LatestArticles devtoBlogPosts={devtoBlogPosts} />
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

export default Home
