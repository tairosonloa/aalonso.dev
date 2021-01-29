const domain = process.env.DOMAIN
const title = 'Full-Stack Software Developer Engineer'
const titleTemplate = 'Aitor Alonso (aalonso.dev)'
const description =
  'Software Engineer for React, Node.js, GraphQL and TypeScript. Based in Madrid, Spanish/English speaking. Consulting/Freelancing for Web Development projects: Code Audits/Reviews, Workshops, JavaScript Training, Implementation ...'
const image = `https://${domain}/images/me.webp`
const author = 'Aitor Alonso'
const keywords =
  'Aitor, Alonso, aalonso, tairosonloa, full stack, fullstack, full-stack, backend, frontend, software, developer, engineer, react, node, js, javascript, typescript, python, SQL, noSQL, graphQL, docker, git, github, gitlab, web, aws, linux, code, freelance'

module.exports = {
  siteMetadata: {
    domain,
    author,
    keywords,
    siteName: 'aalonso.dev',
    siteUrl: `https://${domain}`,
    lang: 'en',
    locale: 'en_US',
    title,
    titleTemplate: `%s | ${titleTemplate}`,
    description,
    image,
    twitter: {
      nickName: '@tairosonloa',
      cardType: 'summary_large_image',
    },
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
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-sass`],
}
