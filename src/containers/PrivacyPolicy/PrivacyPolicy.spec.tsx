import { render } from '@testing-library/react'
import * as React from 'react'
import { PrivacyPolicy } from './PrivacyPolicy'

describe('<PrivacyPolicy/>', () => {
  it('should match the snapshot', () => {
    const renderResult = render(<PrivacyPolicy />)
    expect(renderResult).toMatchSnapshot()
  })
})
