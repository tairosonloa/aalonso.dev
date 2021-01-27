import React, { FC } from 'react'
import { DOMAIN } from '../../site.metadata'
import { Bio } from '../containers/Bio/Bio'
import { Layout, OverwriteDefaultSeo } from '../containers/Layout/Layout'

const Index: FC = () => {
  const url = `https://${DOMAIN}/`
  const seo: OverwriteDefaultSeo = {
    canonical: url,
    openGraph: { url },
  }

  return (
    <Layout headerLinks={[]} seo={seo}>
      <Bio />
    </Layout>
  )
}

export default Index
