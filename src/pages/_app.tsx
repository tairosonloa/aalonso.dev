import 'devicon/devicon.min.css'
import App from 'next/app'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import '../styles/colors.scss'
import '../styles/global.scss'
import '../styles/reset.scss'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props

    if (process.browser) {
      window.scrollTo(0, 0)
    }

    return <Component {...pageProps} />
  }
}

export default MyApp
