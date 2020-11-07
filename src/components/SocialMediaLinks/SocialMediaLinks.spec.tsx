import { render } from '@testing-library/react'
import * as React from 'react'
import { SiteMetadata } from '../../../site.metadata'
import { SocialMediaLinks } from './SocialMediaLinks'

describe('<SocialMediaLinks/>', () => {
  const { socialMediaUrls } = SiteMetadata

  it.each`
    socialMedia   | icon                      | url
    ${'github'}   | ${'ri-github-fill'}       | ${socialMediaUrls.github}
    ${'linkedin'} | ${'ri-linkedin-box-fill'} | ${socialMediaUrls.linkedin}
    ${'email'}    | ${'ri-mail-fill'}         | ${'#'}
  `('should display the icon link to $socialMedia', ({ socialMedia, icon, url }) => {
    const renderResult = render(<SocialMediaLinks />)

    expect(renderResult.getByText(socialMedia)).toBeInTheDocument()
    expect(renderResult.getByTestId(socialMedia)).toHaveClass(icon)
    expect(renderResult.getByTestId(`${socialMedia}-link`)).toHaveAttribute('href', url)
  })
})
