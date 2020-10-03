import { render } from '@testing-library/react'
import * as React from 'react'
import { Emoji } from './Emoji'

describe('<Emoji/>', () => {
  it('should display the default message', () => {
    const renderResult = render(<Emoji emoji="❤️" label="hearth" />)
    expect(renderResult.getByText('❤️')).toBeTruthy()
    expect(renderResult.getByText('❤️')).toHaveAttribute('aria-label', 'hearth')
  })
})
