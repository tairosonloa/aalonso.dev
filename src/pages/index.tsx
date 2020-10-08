import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { DOMAIN } from '../../site.metadata'
import { Bio } from '../containers/Bio/Bio'
import { Career } from '../containers/Career/Career'
import { Cover } from '../containers/Cover/Cover'
import { Layout, OverwriteDefaultSeo } from '../containers/Layout/Layout'
import { Skills } from '../containers/Skills/Skills'
import { RouterClientNext } from '../services/router/RouterClientNext'

const Index: FC = () => {
  const nextRouter = useRouter()
  const router = new RouterClientNext(nextRouter)

  const headerLinks = [
    { href: '#bio', text: 'About me' },
    { href: '#skills', text: 'Skills' },
    { href: '#career', text: 'Career' },
  ]

  const url = `https://${DOMAIN}/`
  const seo: OverwriteDefaultSeo = {
    canonical: url,
    openGraph: { url },
  }

  return (
    <Layout headerLinks={headerLinks} router={router} seo={seo}>
      <Cover />
      <Bio />
      <Skills />
      <Career />
    </Layout>
  )
}

export default Index
