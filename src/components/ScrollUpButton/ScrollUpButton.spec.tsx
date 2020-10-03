import { act, fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import { ScrollUpButton } from './ScrollUpButton'

describe('<ScrollUpButton/>', () => {
  it('should scroll to top', async () => {
    const scrollTo = jest.spyOn(window, 'scrollTo').mockImplementation()
    const renderResult = render(<ScrollUpButton />)

    const button = renderResult.getByTestId('scrollUpButton')
    await act(async () => {
      fireEvent.click(button)
    })
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
