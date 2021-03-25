/* eslint-disable react/jsx-props-no-spreading */
import { GoogleFonts } from 'next-google-fonts'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import CallToAction from '../src/components/CallToAction'
import Footer from '../src/components/Footer'
import Nav from '../src/components/Nav'
import ScrollToTop from '../src/containers/scrollToTop'
import '../src/css/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="Logo Icon" type="image/png" href="/fav.png" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <section className="w-full mt-8 bg-gradient-to-b from-black to-gray-900">
        <CallToAction />
        <ScrollToTop />
        <Footer />
      </section>
    </>
  )
}
export default App
