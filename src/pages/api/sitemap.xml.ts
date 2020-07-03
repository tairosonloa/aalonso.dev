/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'
import { EnumChangefreq, SitemapStream, streamToPromise } from 'sitemap'
import { createGzip } from 'zlib'

/**
 * API endpoint to generate site map. Refactor from:
 * https://annacoding.com/article/10Sarw7UOPidixIhFDtnY5/Generate-sitemap.xml-with-Next.js-build-in-server-and-Typescript
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!res) return {}
  try {
    res.setHeader('content-type', 'application/xml')
    res.setHeader('Content-Encoding', 'gzip')

    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host || process.env.domain}`,
    })

    const pipeline = smStream.pipe(createGzip())
    smStream.write({
      url: '/',
      changefreq: EnumChangefreq.WEEKLY,
      priority: 1,
    })
    smStream.write({
      url: '/privacy-policy',
      changefreq: EnumChangefreq.YEARLY,
    })
    smStream.end()

    streamToPromise(pipeline)
    pipeline.pipe(res).on('error', (e) => {
      throw e
    })
  } catch (e) {
    res.status(500).end()
  }
}
