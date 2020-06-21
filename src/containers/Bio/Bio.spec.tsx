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

  it('should match the snapshot', () => {
    const renderResult = render(<Bio />)
    expect(renderResult).toMatchSnapshot()
  })
})
