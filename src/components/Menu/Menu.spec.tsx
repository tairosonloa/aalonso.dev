import { render } from '@testing-library/react'
import * as React from 'react'
import { Routes } from '../../services/router/Routes'
import { Menu } from './Menu'

const links = [
  { href: '#bio', text: 'About me' },
  { href: '#skills', text: 'Skills' },
  { href: '#career', text: 'Career' },
]

const linksRoutes = [{ href: Routes.home(), text: 'Home' }]

describe('<Header/>', () => {
  it.each(links)('should display the links to $href with text $text', ({ href, text }) => {
    const renderResult = render(<Menu links={links} />)
    expect(renderResult.getByText(text)).toBeTruthy()
    expect(renderResult.getByTestId(text)).toHaveAttribute('href', href)
  })

  it.each(linksRoutes)('should display the $text link', async ({ href, text }) => {
    const renderResult = render(<Menu links={linksRoutes} />)
    const link = renderResult.getByTestId(text)
    expect(renderResult.getByText(text)).toBeTruthy()
    expect(link).toHaveAttribute('href', href.getPath())
  })

  it('should return null if the links provided is an empty array', () => {
    const renderResult = render(<Menu links={[]} />)
    expect(renderResult.container.firstChild).toEqual(null)
  })
})
