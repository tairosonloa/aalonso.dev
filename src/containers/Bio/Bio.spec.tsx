import { render } from '@testing-library/react'
import * as React from 'react'
import { Bio } from './Bio'

describe('<Bio/>', () => {
  it('should match the snapshot', () => {
    const renderResult = render(<Bio />)
    expect(renderResult).toMatchSnapshot()
  })
})
