import 'devicon/devicon.min.css'
import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { SiteMetadata } from '../../site.metadata'
import '../styles/colors.scss'
import '../styles/global.scss'
import '../styles/reset.scss'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    const { seo } = SiteMetadata

    if (process.browser) {
      window.scrollTo(0, 0)
    }

    return (
      <>
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
