import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { DOMAIN } from '../../site.metadata'
import { Bio } from '../containers/Bio/Bio'
import { Layout, OverwriteDefaultSeo } from '../containers/Layout/Layout'
import { RouterClientNext } from '../services/router/RouterClientNext'

const Index: FC = () => {
  const nextRouter = useRouter()
  const router = new RouterClientNext(nextRouter)

  const url = `https://${DOMAIN}/`
  const seo: OverwriteDefaultSeo = {
    canonical: url,
    openGraph: { url },
  }

  return (
    <Layout headerLinks={[]} router={router} seo={seo}>
      <Bio />
    </Layout>
  )
}

export default Index
