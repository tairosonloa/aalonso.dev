import { GoogleFonts } from 'next-google-fonts'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ScrollToTop from '../containers/scrollToTop'
import '../css/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="Logo Icon" type="image/png" href="/images/favicon.png" />
      </Head>
      <Nav />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} className="mb-auto" />
      <section className="w-full mt-8 bg-gradient-to-b from-black to-gray-900">
        <ScrollToTop />
        <Footer />
      </section>
    </div>
  )
}
export default App
