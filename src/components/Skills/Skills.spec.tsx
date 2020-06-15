import { render } from '@testing-library/react'
import * as React from 'react'
import { Skills } from './Skills'

describe('<Skills/>', () => {
  it('should display the default message', () => {
    const title = 'What I offer'
    const subtitle = 'Why you might want to work with me.'

    const renderResult = render(<Skills />)

    expect(renderResult.getByText(title)).toBeTruthy()
    expect(renderResult.getByText(subtitle)).toBeTruthy()
  })

  describe('tech skills', () => {
    it('should display the section title', () => {
      const title = 'Tech Skills'

      const renderResult = render(<Skills />)

      expect(renderResult.getByText(title)).toBeTruthy()
    })

    it('should display math the snpashot', () => {
      const testId = 'tech-skills'

      const renderResult = render(<Skills />)

      expect(renderResult.getByTestId(testId)).toMatchSnapshot()
    })
  })

  describe('soft skills', () => {
    it('should display the section title', () => {
      const title = 'Soft Skills'

      const renderResult = render(<Skills />)

      expect(renderResult.getByText(title)).toBeTruthy()
    })

    it('should display math the snpashot', () => {
      const testId = 'soft-skills'

      const renderResult = render(<Skills />)

      expect(renderResult.getByTestId(testId)).toMatchSnapshot()
    })
  })
})
