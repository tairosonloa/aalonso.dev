import { siteMetadata } from '../../gatsby-config'

export default function mailtoLink(queryParams?: Record<string, unknown>): string {
  const { base64EncodedEmailAddress } = siteMetadata.socialMediaUrls
  return `mailto:${Buffer.from(base64EncodedEmailAddress, 'base64').toString()}${
    queryParams
      ? `?${Object.keys(queryParams)
          .map((key) => `${key}=${queryParams[key]}`)
          .join('&')}`
      : ''
  }`
}
