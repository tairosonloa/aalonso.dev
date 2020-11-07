import { SiteMetadata } from '../../site.metadata'

export default function mailtoLink(queryParams?: Record<string, unknown>): string {
  const { base64EncodedEmailAddress } = SiteMetadata.socialMediaUrls
  return `mailto:${Buffer.from(base64EncodedEmailAddress, 'base64').toString()}${
    queryParams
      ? `?${Object.keys(queryParams)
          .map((key) => `${key}=${queryParams[key]}`)
          .join('&')}`
      : ''
  }`
}
