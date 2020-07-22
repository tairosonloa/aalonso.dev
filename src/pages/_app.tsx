import 'animate.css/animate.min.css'
import 'devicon/devicon.min.css'
import { DefaultSeo } from 'next-seo'
import { Router } from 'next/router'
import React, { useEffect } from 'react'
import 'remixicon/fonts/remixicon.css'
import { SiteMetadata } from '../../site.metadata'
import { pageview } from '../services/analytics/gtag'
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
    </>
  )
}

export default App
