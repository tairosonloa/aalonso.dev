import { render } from '@testing-library/react'
import * as React from 'react'
import { Skills } from './Skills'

describe('<Skills/>', () => {
  it('should display the default message', () => {
    const title = 'What I offer'
    const subtitle = 'What people get when work with me.'

    const renderResult = render(<Skills />)

    expect(renderResult.getByText(title)).toBeTruthy()
    expect(renderResult.getByText(subtitle)).toBeTruthy()
  })

  it('should match the snapshot', () => {
    const renderResult = render(<Skills />)
    expect(renderResult).toMatchSnapshot()
  })
})
