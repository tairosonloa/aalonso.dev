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

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* TODO: use Next.js plugin when stable release */}
          {/* See: https://www.npmjs.com/package/@next/plugin-google-analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
