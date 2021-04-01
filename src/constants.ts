import { NextSeoProps } from 'next-seo'

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN
export const UMAMI_ANALYTICS_ID = process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_ID
export const CLOUDFLARE_ANALYTICS_ID = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_ID

const title = 'Full-Stack Software Engineer'
const titleTemplate = 'Aitor Alonso (aalonso.dev)'
const description =
  'Software Engineer for React, Node.js, GraphQL and TypeScript. Based in Madrid, Spanish/English speaking. Consulting/Freelancing for Web Development projects: Code Audits/Reviews, Workshops, JavaScript Training, Implementation ...'
const author = 'Aitor Alonso'
const keywords =
  'Aitor, Alonso, aalonso, tairosonloa, full stack, fullstack, full-stack, backend, frontend, software, developer, engineer, react, node, js, javascript, typescript, python, SQL, noSQL, graphQL, docker, git, github, gitlab, web, aws, linux, code, freelance'

export const SEO: NextSeoProps = {
  title,
  titleTemplate: `%s | ${titleTemplate}`,
  description,
  twitter: {
    handle: '@tairosonloa',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: `${title} | ${titleTemplate}`,
    description,
    images: [{ url: `https://${DOMAIN}/images/me.png` }],
    site_name: 'aalonso.dev',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: author,
    },
    {
      name: 'copyright',
      content: author,
    },
    {
      name: 'keywords',
      content: keywords,
    },
  ],
}

export const SOCIAL_MEDIA_URLS = {
  github: 'https://github.com/tairosonloa',
  linkedin: 'https://www.linkedin.com/in/aitoralonsonunez',
  twitter: 'https://twitter.com/tairosonloa',
  devto: 'https://dev.to/tairosonloa',
  base64EncodedEmailAddress: 'YWl0b3JAYWFsb25zby5kZXY=',
}
