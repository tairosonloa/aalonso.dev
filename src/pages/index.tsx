import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Bio from '../components/Landing/Bio'
import LatestArticles from '../components/Landing/LatestArticles'
import { AllBlogPosts } from '../containers/types/types'

const Home: NextPage<AllBlogPosts> = (props) => {
  const { devtoBlogPosts: devData } = props

  return (
    <main className="w-11/12 px-4 md:px-0 pt-40 md:pt-44 lg:pt-52 mx-auto md:w-3/4 lg:w-2/4 mt-0 ">
      <Bio />
      <LatestArticles devtoBlogPosts={devData} />
    </main>
  )
}

const getPosts = async () => {
  const res = await fetch('https://dev.to/api/articles?username=tairosonloa')
  const posts = await res.json()

  return posts
}

export const getStaticProps: GetStaticProps = async () => {
  const devData = await getPosts()

  if (!devData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { devData },
    revalidate: 1,
  }
}

export default Home
