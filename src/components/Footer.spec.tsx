import { render } from '@testing-library/react'
import * as React from 'react'
import { SOCIAL_MEDIA_URLS } from '../constants'
import Footer from './Footer'

describe('<Footer/>', () => {
  it('should display the social media links', () => {
    const renderResult = render(<Footer />)

    expect(renderResult.getByLabelText('GitHub')).toHaveProperty('href', SOCIAL_MEDIA_URLS.github)
    expect(renderResult.getByLabelText('Twitter')).toHaveProperty('href', SOCIAL_MEDIA_URLS.twitter)
    expect(renderResult.getByLabelText('DevTo')).toHaveProperty('href', SOCIAL_MEDIA_URLS.devto)
    expect(renderResult.getByLabelText('LinkedIn')).toHaveProperty(
      'href',
      SOCIAL_MEDIA_URLS.linkedin,
    )
  })

  it('should display the copyright', () => {
    const renderResult = render(<Footer />)

    expect(renderResult.getByText(`© 2020-${new Date().getFullYear()} Aitor Alonso`)).toBeTruthy()
  })
})
