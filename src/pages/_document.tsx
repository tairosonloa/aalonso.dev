import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import {
  CLOUDFLARE_ANALYTICS_ID,
  DOMAIN,
  SOCIAL_MEDIA_URLS,
  UMAMI_ANALYTICS_ID,
} from '../constants'

export default class extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
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
          <link rel="preconnect" href="https://fonts.googleapis.com" key="preconnect-gf" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" key="dns-prefetch-gf" />
          {/* Cloudflare Web Analytics */}
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${CLOUDFLARE_ANALYTICS_ID}"}`}
          />
          {/* Webmentions hidden link */}
          <link href={SOCIAL_MEDIA_URLS.github} rel="me" />
          {/* Umami Web Analytics */}
          <script
            async
            defer
            data-website-id={UMAMI_ANALYTICS_ID}
            src={`https://analytics.${DOMAIN}/umami.js`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
