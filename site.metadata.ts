import { NextSeoProps } from 'next-seo/lib/types.d'

export const DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL

const title = 'Full-Stack Software Developer Engineer'
const titleTemplate = 'Aitor Alonso (aalonso.dev)'
const description =
  'Software Engineer for React, Node.js, GraphQL and TypeScript. Based in Madrid, Spanish/English speaking. Consulting/Freelancing for Web Development projects: Code Audits/Reviews, Workshops, JavaScript Training, Implementation ...'
const author = 'Aitor Alonso'
const keywords =
  'Aitor, Alonso, aalonso, tairosonloa, full stack, fullstack, full-stack, backend, frontend, software, developer, engineer, react, node, js, javascript, typescript, python, SQL, noSQL, graphQL, docker, git, github, gitlab, web, aws, linux, code, freelance'

export const SiteMetadata = {
  socialMediaUrls: {
    github: 'https://github.com/tairosonloa',
    linkedin: 'https://www.linkedin.com/in/aitoralonsonunez/',
    twitter: 'https://twitter.com/tairosonloa',
    base64EncodedEmailAddress: 'YWl0b3JAYWFsb25zby5kZXY=',
  },
  employerInfo: {
    name: 'Acid Tango',
    website: 'https://acidtango.com/',
  },
  seo: {
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
  } as NextSeoProps,
}
