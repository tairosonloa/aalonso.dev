import { act, fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import { RouterFake } from '../../services/router/RouterFake'
import { Routes } from '../../services/router/Routes'
import { Menu } from './Menu'

const pushSpy = jest.fn()
const routerSpy = new RouterFake({ push: pushSpy })
const links = [
  { href: '#bio', text: 'About me' },
  { href: '#skills', text: 'Skills' },
  { href: '#career', text: 'Career' },
]

const linksRoutes = [{ href: Routes.home(), text: 'Home' }]

describe('<Header/>', () => {
  it.each(links)('should display the links to $href with text $text', ({ href, text }) => {
    const renderResult = render(<Menu links={links} router={routerSpy} />)
    expect(renderResult.getByText(text)).toBeTruthy()
    expect(renderResult.getByTestId(text)).toHaveAttribute('href', href)
  })

  it.each(linksRoutes)('should display the $text link', async ({ href, text }) => {
    const renderResult = render(<Menu links={linksRoutes} router={routerSpy} />)
    const link = renderResult.getByTestId(text)
    expect(renderResult.getByText(text)).toBeTruthy()
    expect(link).toHaveAttribute('href', href.getPath())
    await act(async () => {
      fireEvent.click(link)
    })
    expect(pushSpy).toHaveBeenCalledWith(href.getPath())
  })

  it('should return null if the links provided is an empty array', () => {
    const renderResult = render(<Menu links={[]} router={routerSpy} />)
    expect(renderResult.container.firstChild).toEqual(null)
  })
})
