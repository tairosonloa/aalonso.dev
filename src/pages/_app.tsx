import { DefaultSeo } from 'next-seo'
import { Router } from 'next/router'
import React, { useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import 'remixicon/fonts/remixicon.css'
import { SiteMetadata } from '../../site.metadata'
import { pageview } from '../services/analytics/gtag'
import { Routes } from '../services/router/Routes'
import '../styles/colors.scss'
import '../styles/global.scss'
import '../styles/reset.scss'

const App = ({
  Component,
  pageProps,
}: {
  Component: React.FC
  pageProps: Record<string, unknown>
}): JSX.Element => {
  const { seo } = SiteMetadata

  if (process.browser) {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
      <CookieConsent expires={365} buttonText="Accept" containerClasses="cookiesBanner">
        This site uses cookies to provide you with a great user experience, among others.{' '}
        <a href={Routes.privacyPolicy().getPath()}>Read the Privacy & Cookies Policy</a>.
      </CookieConsent>
    </>
  )
}

export default App
