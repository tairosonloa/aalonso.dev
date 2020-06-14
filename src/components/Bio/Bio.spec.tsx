import { render } from '@testing-library/react'
import * as React from 'react'
import { Bio } from './Bio'

describe('<Bio/>', () => {
  it('should display the default message', () => {
    const title = 'About me'
    const subtitle = 'Let me introduce myself first.'

    const renderResult = render(<Bio />)

    expect(renderResult.getByText(title)).toBeTruthy()
    expect(renderResult.getByText(subtitle)).toBeTruthy()
  })

  it('should display the image', () => {
    const imagePath = '/images/me.jpeg'

    const renderResult = render(<Bio />)
    expect(renderResult.getByAltText('')).toHaveAttribute('src', imagePath)
  })

  describe('social media urls', () => {
    it.each`
      socialMedia   | icon                      | url
      ${'github'}   | ${'ri-github-fill'}       | ${'https://github.com/tairosonloa'}
      ${'linkedin'} | ${'ri-linkedin-box-fill'} | ${'https://www.linkedin.com/in/aitoralonsonunez/'}
      ${'email'}    | ${'ri-mail-fill'}         | ${'mailto:aitor.alonso.nunez@gmail.com'}
    `('should display the icon link to $socialMedia', ({ socialMedia, icon, url }) => {
      const renderResult = render(<Bio />)

      expect(renderResult.getByTestId(socialMedia)).toHaveClass(icon)
      expect(renderResult.getByTestId(`${socialMedia}-link`)).toHaveAttribute('href', url)
    })
  })
})
