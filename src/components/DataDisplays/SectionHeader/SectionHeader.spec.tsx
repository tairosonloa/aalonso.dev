import { render } from '@testing-library/react'
import * as React from 'react'
import { SectionHeader } from './SectionHeader'

describe('<SectionHeader/>', () => {
  it('should display the default message', () => {
    const renderResult = render(<SectionHeader title="Example title" subtitle="Example subtitle" />)

    const title = renderResult.getByText('Example title')
    const subtitle = renderResult.getByText('Example subtitle')

    expect(title).toBeTruthy()
    expect(subtitle).toBeTruthy()

    expect(title).toHaveClass('title')
    expect(subtitle).toHaveClass('titleSmall')
  })
})
