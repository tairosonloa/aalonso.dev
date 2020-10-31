import 'animate.css/animate.min.css'
import 'devicon/devicon.min.css'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { DOMAIN } from '../../site.metadata'
import { Bio } from '../containers/Bio/Bio'
import { HeaderLink, Layout, OverwriteDefaultSeo } from '../containers/Layout/Layout'
import { RouterClientNext } from '../services/router/RouterClientNext'

const Index: FC = () => {
  const nextRouter = useRouter()
  const router = new RouterClientNext(nextRouter)

  const url = `https://${DOMAIN}/`
  const seo: OverwriteDefaultSeo = {
    canonical: url,
    openGraph: { url },
  }

  const headerLinks: HeaderLink[] = [
    { href: '#hola', text: 'Hola test' },
    { href: '#hola', text: 'Hola' },
  ]

  return (
    <Layout headerLinks={headerLinks} router={router} seo={seo}>
      <Bio />
    </Layout>
  )
}

export default Index
