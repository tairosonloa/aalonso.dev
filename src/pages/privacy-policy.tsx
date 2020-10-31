import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { DOMAIN } from '../../site.metadata'
import { Layout, OverwriteDefaultSeo } from '../containers/Layout/Layout'
import { PrivacyPolicy } from '../containers/PrivacyPolicy/PrivacyPolicy'
import { RouterClientNext } from '../services/router/RouterClientNext'
import { Routes } from '../services/router/Routes'

const PrivacyPolicyPage: FC = () => {
  const nextRouter = useRouter()
  const router = new RouterClientNext(nextRouter)

  const headerLinks = [{ href: Routes.home(), text: 'Home' }]

  const url = `https://${DOMAIN}${Routes.privacyPolicy().getPath()}`
  const seo: OverwriteDefaultSeo = {
    canonical: url,
    openGraph: { url },
  }

  return (
    <Layout headerLinks={headerLinks} router={router} seo={seo}>
      <PrivacyPolicy />
    </Layout>
  )
}

export default PrivacyPolicyPage
