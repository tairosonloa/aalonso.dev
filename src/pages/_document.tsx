import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class extends Document {
  render(): JSX.Element {
    return (
      <html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            sizes="48x48"
            href="/images/favicons/favicon-48.png"
            key="favicon-48"
          />
          <link
            rel="shortcut icon"
            sizes="96x96"
            href="/images/favicons/favicon-96.png"
            key="favicon-96"
          />
          <link
            rel="shortcut icon"
            sizes="144x144"
            href="/images/favicons/favicon-144.png"
            key="favicon-144"
          />
          <link
            rel="shortcut icon"
            sizes="192x192"
            href="/images/favicons/favicon-192.png"
            key="favicon-192"
          />
          <link
            rel="apple-touch-icon"
            sizes="48x48"
            href="/images/favicons/favicon-48.png"
            key="apple-favicon-48"
          />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="/images/favicons/favicon-96.png"
            key="apple-favicon-96"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/favicons/favicon-144.png"
            key="apple-favicon-144"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/images/favicons/favicon-192.png"
            key="apple-favicon-192"
          />
          <link rel="manifest" href="/manifest.webmanifest" key="webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
