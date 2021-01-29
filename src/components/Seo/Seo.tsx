import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

type SeoProps = {
  title?: string
  description?: string
  image?: string
  keywords?: string
  lang?: string
  locale?: string
  article?: boolean
}

export const SEO: FC<SeoProps> = ({
  title,
  description,
  image,
  keywords,
  lang,
  locale,
  article = false,
}) => {
  const faviconSizes = [48, 96, 144, 192]
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    defaultImage,
    siteName,
    siteUrl,
    author,
    defaultKeywords,
    defaultLang,
    defaultLocale,
    twitter,
  } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    author,
    keywords: keywords || defaultKeywords,
    url: `${siteUrl}${pathname}`,
    siteName,
    locale: locale || defaultLocale,
    lang: lang || locale?.split('_')[0] || defaultLang,
  }
  return (
    <Helmet htmlAttributes={{ lang: seo.lang }} title={seo.title} titleTemplate={titleTemplate}>
      {/* general tags */}
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="manifest" href="/manifest.webmanifest" key="webmanifest" />
      <meta name="author" content={seo.author} />
      <meta name="copyright" content={seo.author} />
      <meta name="keywords" content={seo.keywords} />

      {/* favicons */}
      {faviconSizes.map((size) => (
        <link
          rel="shortcut icon"
          sizes={`${size}x${size}`}
          href="/images/favicons/favicon-48.png"
          key={`favicon-${size}`}
        />
      ))}
      {faviconSizes.map((size) => (
        <link
          rel="apple-touch-icon"
          sizes={`${size}x${size}`}
          href="/images/favicons/favicon-48.png"
          key={`apple-favicon-${size}`}
        />
      ))}

      {/* OpenGraph tags */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={seo.siteName} />
      {article ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitter.cardType} />
      <meta name="twitter:creator" content={twitter.nickName} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        defaultImage: image
        siteName
        siteUrl
        author
        defaultKeywords: keywords
        defaultLang: lang
        defaultLocale: locale
        twitter {
          nickName
          cardType
        }
      }
    }
  }
`
