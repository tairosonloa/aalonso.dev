import React, { FC } from 'react'
import { SEO } from '../components/Seo/Seo'
import { Bio } from '../containers/Bio/Bio'
import { Layout } from '../containers/Layout/Layout'

const Index: FC = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Bio />
      </Layout>
    </>
  )
}

export default Index
