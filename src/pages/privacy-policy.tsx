import React, { FC } from 'react'
import { SEO } from '../components/Seo/Seo'
import { Layout } from '../containers/Layout/Layout'
import { PrivacyPolicy } from '../containers/PrivacyPolicy/PrivacyPolicy'
import { Routes } from '../services/router/Routes'

const PrivacyPolicyPage: FC = () => {
  const headerLinks = [{ href: Routes.home(), text: 'Home' }]

  return (
    <>
      <SEO title="Privacy Policy" />
      <Layout headerLinks={headerLinks} showFooter>
        <PrivacyPolicy />
      </Layout>
    </>
  )
}

export default PrivacyPolicyPage
