import { MetaTag, OpenGraph, Twitter } from 'next-seo/lib/types.d'

export const SiteMetadata = {
  socialMediaUrls: {
    github: 'https://github.com/tairosonloa',
    linkedin: 'https://www.linkedin.com/in/aitoralonsonunez/',
    emailAddress: 'aitor.alonso.nunez@gmail.com', // TODO: change by hello@aalonso.dev
  },
  employerInfo: {
    name: 'Acid Tango',
    website: 'https://acidtango.com/',
  },
  seo: {
    title: 'Full Stack Software Developer Engineer',
    titleTemplate: '%s | Aitor Alonso (aalonso)',
    description:
      'Software Engineer for React, Node.js, GraphQL and TypeScript. Based in Madrid, Spanish/English speaking. Consulting/Freelancing for Web Development projects: Code Audits/Reviews, Workshops, JavaScript Training, Implementation ...',
    twitter: {
      handle: '@tairosonloa',
      cardType: 'summary_large_image',
    } as Twitter,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: 'Aitor Alonso | Full Stack Developer',
      description:
        'Software Engineer for React, Node.js, GraphQL and TypeScript. Based in Madrid, Spanish/English speaking. Consulting/Freelancing for Web Development projects: Code Audits/Reviews, Workshops, JavaScript Training, Implementation ...',
      image: 'https://aalonso.dev/images/me.jpeg',
      url: 'https://aalonso.dev/',
      site_name: 'aalonso',
    } as OpenGraph,
    additionalMetaTags: [
      {
        name: 'author',
        content: 'Aitor Alonso',
      },
      {
        name: 'copyright',
        content: 'Aitor Alonso',
      },
      {
        name: 'keywords',
        content:
          'Aitor, Alonso, aalonso, tairosonloa, full stack, fullstack, backend, frontend, software, developer, engineer, react, node, js, javascript, typescript, python, SQL, noSQL, graphSQL, docker, git, github, gitlab, web, aws, linux, code, freelance',
      },
    ] as MetaTag[],
  },
}
