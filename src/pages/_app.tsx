import { GoogleFonts } from 'next-google-fonts'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import React from 'react'
import { SiteMetadata } from '../../site.metadata'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ScrollToTop from '../containers/scrollToTop'
import '../css/tailwind.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { seo } = SiteMetadata

  return (
    <div className="flex flex-col h-screen justify-between">
      <DefaultSeo {...seo} />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
      <Nav />
      <Component {...pageProps} className="mb-auto" />
      <div className="footer w-full mt-8 bg-gradient-to-b from-transparent to-gray-800">
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  )
}
export default App
