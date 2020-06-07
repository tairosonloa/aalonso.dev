import { render } from '@testing-library/react'
import * as React from 'react'
import { Cover } from './Cover'

describe('<Cover/>', () => {
  it('should display the default message', () => {
    const title = 'Aitor Alonso'
    const subtitle = 'Full Stack Software Developer Engineer and DevOps'

    const renderResult = render(<Cover />)

    expect(renderResult.getByText(title)).toBeTruthy()
    expect(renderResult.getByText(subtitle)).toBeTruthy()
  })
})
