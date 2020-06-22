import { act, fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import { RouterFake } from '../../services/router/RouterFake'
import { Footer } from './Footer'

const pushSpy = jest.fn()
const routerSpy = new RouterFake({ push: pushSpy })

describe('<Footer/>', () => {
  it('should display the default message', () => {
    const renderResult = render(<Footer router={routerSpy} />)

    expect(renderResult.getByText('Copyright', { exact: false })).toBeTruthy()
    expect(renderResult.getByText('Privacy & Cookies')).toBeTruthy()
  })

  describe('Footer links', () => {
    it('should navigate to privacy policy page', async () => {
      const renderResult = render(<Footer router={routerSpy} />)

      const privacyLink = renderResult.getByText('Privacy & Cookies')
      await act(async () => {
        fireEvent.click(privacyLink)
      })
      expect(pushSpy).toHaveBeenCalledWith('/privacy-policy')
    })
  })
})
