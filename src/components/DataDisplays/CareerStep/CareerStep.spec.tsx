import { render } from '@testing-library/react'
import * as React from 'react'
import { CareerStep } from './CareerStep'

const content = {
  date: '2015 - 2019',
  title: "Bachelor's Degree in Computer Science and Engineering",
  description:
    "Got my Bachelor's Degree in Computer Science and Engineering at Universidad Carlos III de Madrid with honors. Specialized in artificial intelligence and data analysis.",
}

describe('<CareerStep/>', () => {
  it('should display the default message', () => {
    const renderResult = render(<CareerStep {...content} />)
    expect(renderResult.getByText(content.date)).toBeTruthy()
    expect(renderResult.getByText(content.title)).toBeTruthy()
    expect(renderResult.getByText(content.description)).toBeTruthy()
  })

  describe('positioning', () => {
    it('positioning left', () => {
      const renderResult = render(<CareerStep {...content} stepIsOnTheLeft />)
      expect(renderResult.container.firstChild).toHaveClass('left')
    })

    it('positioning right', () => {
      const renderResult = render(<CareerStep {...content} stepIsOnTheLeft={false} />)
      expect(renderResult.container.firstChild).toHaveClass('right')
    })
  })
})
