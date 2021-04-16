import { render } from '@testing-library/react'
import * as React from 'react'
import { SOCIAL_MEDIA_URLS } from '../constants'
import Footer from './Footer'

describe('<Footer/>', () => {
  it.each`
    label         | link
    ${'GitHub'}   | ${SOCIAL_MEDIA_URLS.github}
    ${'Twitter'}  | ${SOCIAL_MEDIA_URLS.twitter}
    ${'LinkedIn'} | ${SOCIAL_MEDIA_URLS.linkedin}
    ${'DevTo'}    | ${SOCIAL_MEDIA_URLS.devto}
  `('should display the link to $label social media', ({ label, link }) => {
    const renderResult = render(<Footer />)

    expect(renderResult.getByLabelText(label)).toHaveProperty('href', link)
  })

  it('should display the copyright', () => {
    const renderResult = render(<Footer />)

    expect(renderResult.getByText(`© 2020-${new Date().getFullYear()} Aitor Alonso`)).toBeTruthy()
  })
})
