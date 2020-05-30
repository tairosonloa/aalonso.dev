import { render } from '@testing-library/react'
import React from 'react'

describe('Index', () => {
  it("shows 'Hello world'", () => {
    const renderResult = render(<h1>Hello world</h1>)

    expect(renderResult.getByText('Hello world')).toBeTruthy()
  })
})
