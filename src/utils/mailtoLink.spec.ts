import { SiteMetadata } from '../../site.metadata'
import mailtoLink from './mailtoLink'

const FAKE_MAILTO_LINK = 'mailto:hello@world.com'

describe('mailtoLink', () => {
  beforeAll(() => {
    SiteMetadata.socialMediaUrls.base64EncodedEmailAddress = 'aGVsbG9Ad29ybGQuY29t'
  })

  it('should return a mailto link for the decode address', () => {
    expect(mailtoLink()).toEqual(FAKE_MAILTO_LINK)
  })

  it('should return a mailto link for the decode address with params', () => {
    const params = { subject: 'Hello world!' }
    expect(mailtoLink(params)).toEqual(`${FAKE_MAILTO_LINK}?subject=${params.subject}`)
  })

  it('should return a mailto link for the decode address with params', () => {
    const params = { subject: 'Hello world!', test: 'this is a test' }
    expect(mailtoLink(params)).toEqual(
      `${FAKE_MAILTO_LINK}?subject=${params.subject}&test=${params.test}`,
    )
  })
})
