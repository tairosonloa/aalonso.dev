const { EnumChangefreq, SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')
const path = require('path')
const fs = require('fs')

if (!process.env.DOMAIN) {
  throw Error("ENV variable 'DOMAIN' must be set")
}

const robots = `Sitemap: https://${process.env.DOMAIN}/sitemap.xml

User-agent: *
Allow: /*`

const generateSitemapAndRobots = async () => {
  const stream = new SitemapStream({
    hostname: `https://${process.env.DOMAIN}`,
  })
  const links = [
    {
      url: '/',
      changefreq: EnumChangefreq.WEEKLY,
      priority: 1,
    },
    {
      url: '/privacy-policy',
      changefreq: EnumChangefreq.YEARLY,
    },
  ]
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString(),
  )
  fs.writeFileSync(path.resolve(__dirname, '../../public/sitemap.xml'), xml)
  fs.writeFileSync(path.resolve(__dirname, '../../public/robots.txt'), robots)
}

generateSitemapAndRobots().then(() => process.exit(0))
