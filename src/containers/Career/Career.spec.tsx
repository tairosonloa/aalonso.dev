import { render } from '@testing-library/react'
import * as React from 'react'
import { Career } from './Career'

describe('<Career/>', () => {
  it('should display the default message', () => {
    const title = 'Career'
    const subtitle = 'My journey so far.'

    const renderResult = render(<Career />)

    expect(renderResult.getByText(title)).toBeTruthy()
    expect(renderResult.getByText(subtitle)).toBeTruthy()
  })

  it('should match the snapshot', () => {
    const renderResult = render(<Career />)
    expect(renderResult).toMatchSnapshot()
  })
})
