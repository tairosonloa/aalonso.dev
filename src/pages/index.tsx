import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Bio from '../components/Landing/Bio'
import LatestArticles from '../components/Landing/LatestArticles'
import { Props } from '../containers/types/types'

const Home: NextPage<Props> = (props) => {
  const { devData } = props

  return (
    <section className="w-11/12 px-4 md:px-0 pt-40 md:pt-44 lg:pt-52 mx-auto md:w-3/4 lg:w-2/4 mt-0 ">
      <Bio />
      <LatestArticles devData={devData} />
    </section>
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
    props: { devData }, // will be passed to the page component as props
    revalidate: 1,
  }
}

export default Home
