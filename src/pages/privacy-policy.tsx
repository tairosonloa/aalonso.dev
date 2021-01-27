import React, { FC } from 'react'
import { DOMAIN } from '../../site.metadata'
import { Layout, OverwriteDefaultSeo } from '../containers/Layout/Layout'
import { PrivacyPolicy } from '../containers/PrivacyPolicy/PrivacyPolicy'
import { Routes } from '../services/router/Routes'

const PrivacyPolicyPage: FC = () => {
  const headerLinks = [{ href: Routes.home(), text: 'Home' }]

  const url = `https://${DOMAIN}${Routes.privacyPolicy().getPath()}`
  const seo: OverwriteDefaultSeo = {
    canonical: url,
    openGraph: { url },
  }

  return (
    <Layout headerLinks={headerLinks} seo={seo} showFooter>
      <PrivacyPolicy />
    </Layout>
  )
}

export default PrivacyPolicyPage
