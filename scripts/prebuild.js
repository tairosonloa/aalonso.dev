const { EnumChangefreq, SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')
const path = require('path')
const fs = require('fs')

if (!process.env.NEXT_PUBLIC_DOMAIN) {
  throw Error("ENV variable 'DOMAIN' must be set")
}

const robots = `Sitemap: https://${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml

User-agent: *
Allow: /*`

const redirects = `# These rules will change if you change your site’s custom domains or HTTPS settings

# Redirect http to https
http://${process.env.NEXT_PUBLIC_DOMAIN}/* https://${process.env.NEXT_PUBLIC_DOMAIN}/:splat 301!
http://www.${process.env.NEXT_PUBLIC_DOMAIN}/* https://${process.env.NEXT_PUBLIC_DOMAIN}/:splat 301!

# Redirect default Netlify subdomain to primary domain
http://aalonso.netlify.app/* https://${process.env.NEXT_PUBLIC_DOMAIN}/:splat 301!
http://aalonso.netlify.com/* https://${process.env.NEXT_PUBLIC_DOMAIN}/:splat 301!
https://aalonso.netlify.app/* https://${process.env.NEXT_PUBLIC_DOMAIN}/:splat 301!
https://aalonso.netlify.com/* https://${process.env.NEXT_PUBLIC_DOMAIN}/:splat 301!

# Redirect old domain to primary domain
http://aalonso.eu/* https://${process.env.NEXT_PUBLIC_DOMAIN}/:splat 301!
http://www.aalonso.eu/* https://${process.env.NEXT_PUBLIC_DOMAIN}/:splat 301!
https://aalonso.eu/* https://${process.env.NEXT_PUBLIC_DOMAIN}/:splat 301!
https://www.aalonso.eu/* https://${process.env.NEXT_PUBLIC_DOMAIN}/:splat 301!
`

const headers = `# Cloudflare must cache Netlify assets for 7 days (604 800 seconds).
# This means I'm using custom headers on Netlify to tell Cloudflare CDN
# how long to cache assets.
#
# I'll then control how long browsers cache using cloudflare CDN settings.

/images/*
Cache-Control: public, s-max-age=604800
/*.css
Cache-Control: public, s-max-age=604800
/*.js
Cache-Control: public, s-max-age=604800
`

const generateSitemap = async () => {
  const stream = new SitemapStream({
    hostname: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  })
  const links = [
    {
      url: '/',
      changefreq: EnumChangefreq.WEEKLY,
      priority: 1,
    },
    {
      url: '/blog',
      changefreq: EnumChangefreq.WEEKLY,
    },
    {
      url: '/about',
      changefreq: EnumChangefreq.YEARLY,
    },
  ]
  const posts = await fetch('https://dev.to/api/articles?username=tairosonloa').json()
  posts.forEach((post) =>
    links.push({
      url: `/blog/${slug}`,
      changefreq: EnumChangefreq.YEARLY,
    }),
  )
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString(),
  )
  fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), xml)
}

fs.writeFileSync(path.resolve(__dirname, '../public/robots.txt'), robots)
fs.writeFileSync(path.resolve(__dirname, '../public/_redirects'), redirects)
fs.writeFileSync(path.resolve(__dirname, '../public/_headers'), headers)
generateSitemap().then(() => process.exit(0))
