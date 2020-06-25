import { render } from '@testing-library/react'
import * as React from 'react'
import { Header } from './Header'

const headerLinks = [
  { href: '#bio', text: 'About me' },
  { href: '#skills', text: 'Skills' },
  { href: '#career', text: 'Career' },
]

describe('<Header/>', () => {
  it.each(headerLinks)('should display the links to $href with text $text', ({ href, text }) => {
    const renderResult = render(<Header links={headerLinks} />)
    expect(renderResult.getByText(text)).toBeTruthy()
    expect(renderResult.getByTestId(text)).toHaveAttribute('href', href)
  })
})
