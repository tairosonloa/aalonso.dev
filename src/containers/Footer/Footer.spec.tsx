import { render } from '@testing-library/react'
import * as React from 'react'
import { Footer } from './Footer'

describe('<Footer/>', () => {
  it('should display the default message', () => {
    const renderResult = render(<Footer />)

    expect(renderResult.getByText('Copyright', { exact: false })).toBeTruthy()
    expect(renderResult.getByText('Privacy & Cookies')).toBeTruthy()
  })

  describe('Footer links', () => {
    it('should navigate to privacy policy page', async () => {
      const renderResult = render(<Footer />)

      const privacyLink = renderResult.getByText('Privacy & Cookies')
      expect(privacyLink).toHaveAttribute('href', '/privacy-policy')
    })
  })
})
