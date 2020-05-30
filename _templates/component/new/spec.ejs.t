---
to: src/<%= path %>/<%= name %>/<%= name %>.spec.tsx
---
import * as React from 'react'
import { render } from '@testing-library/react'
import { <%= name %> } from './<%= name %>'

describe('<<%= name %>/>', () => {
  it('should display the default message', () => {
    const renderResult = render(<<%= name %> />)
    expect(renderResult.getByText('This is the <%= name %> component!')).toBeTruthy()
  })
})
