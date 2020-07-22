import * as React from 'react'
import { render } from '@testing-library/react'
import { CareerStep } from './CareerStep'

describe('<CareerStep/>', () => {
  it('should display the default message', () => {
    const renderResult = render(<CareerStep />)
    expect(renderResult.getByText('This is the CareerStep component!')).toBeTruthy()
  })
})
