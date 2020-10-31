import 'animate.css/animate.min.css'
import 'devicon/devicon.min.css'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { DOMAIN } from '../../site.metadata'
import { Bio } from '../containers/Bio/Bio'
import { OverwriteDefaultSeo } from '../containers/Layout/Layout'
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
    // <Layout headerLinks={headerLinks} router={router} seo={seo} fixedHeader>
    <Bio />
    // </Layout>
  )
}

export default Index
