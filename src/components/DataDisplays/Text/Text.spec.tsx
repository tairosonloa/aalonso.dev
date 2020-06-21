import { render } from '@testing-library/react'
import React from 'react'
import { Text, TextType } from './Text'

describe('<Text/>', () => {
  const SAMPLE_TEXT = 'This is the Text component'
  const allTypes = Object.values(TextType)

  it.each(allTypes)('renders the content with type %s', (type) => {
    const renderResult = render(<Text textType={type}>{SAMPLE_TEXT}</Text>)

    const text = renderResult.getByText(SAMPLE_TEXT)

    expect(text).toBeTruthy()
    expect(text).toHaveClass(type)
  })
})
