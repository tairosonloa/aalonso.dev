import { render } from '@testing-library/react'
import * as React from 'react'
import Header from './Header'

describe('<Header/>', () => {
  it('should display the logo', () => {
    const renderResult = render(<Header />)

    expect(renderResult.getByLabelText('Logo')).toHaveProperty('href', 'http://localhost/')
    expect(renderResult.getByText('aalonso')).toBeTruthy()
  })

  it.each`
    label      | link
    ${'Home'}  | ${'/'}
    ${'Blog'}  | ${'/blog'}
    ${'About'} | ${'/about'}
  `('should display the $label link in the nav menu', ({ label, link }) => {
    const renderResult = render(<Header />)

    expect(renderResult.getByLabelText(label)).toHaveProperty('href', `http://localhost${link}`)
  })
})
