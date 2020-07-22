import { render } from '@testing-library/react'
import React from 'react'
import { Typography, TypographyType } from './Typography'

describe('<Typography/>', () => {
  const SAMPLE_TEXT = 'This is the Typography component'
  const allTypes = Object.values(TypographyType)

  it.each(allTypes)('renders the content with type %s', (type) => {
    const renderResult = render(<Typography typographyType={type}>{SAMPLE_TEXT}</Typography>)

    const text = renderResult.getByText(SAMPLE_TEXT)

    expect(text).toBeTruthy()
    expect(text).toHaveClass(type)
  })
})
