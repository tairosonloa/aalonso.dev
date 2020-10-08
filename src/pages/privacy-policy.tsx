import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Layout } from '../containers/Layout/Layout'
import { PrivacyPolicy } from '../containers/PrivacyPolicy/PrivacyPolicy'
import { RouterClientNext } from '../services/router/RouterClientNext'
import { Routes } from '../services/router/Routes'

const PrivacyPolicyPage: FC = () => {
  const nextRouter = useRouter()
  const router = new RouterClientNext(nextRouter)

  const headerLinks = [{ href: Routes.home(), text: 'Home' }]

  return (
    <Layout headerLinks={headerLinks} router={router} fixedHeader>
      <PrivacyPolicy />
    </Layout>
  )
}

export default PrivacyPolicyPage
