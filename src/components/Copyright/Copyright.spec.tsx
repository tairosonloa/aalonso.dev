import { render } from '@testing-library/react'
import * as React from 'react'
import { Copyright } from './Copyright'

describe('<Copyright/>', () => {
  describe('current year is the same than initial copyright year', () => {
    it('should display the default message', () => {
      jest.spyOn(Date.prototype, 'getFullYear').mockReturnValueOnce(2020)

      const renderResult = render(<Copyright name="Aitor Alonso" initialYear={2020} />)

      expect(renderResult.getByText('Copyright © 2020 Aitor Alonso')).toBeTruthy()
    })
  })

  describe('current year differs from initial copyright year', () => {
    it('should display the default message', () => {
      jest.spyOn(Date.prototype, 'getFullYear').mockReturnValueOnce(2022)

      const renderResult = render(<Copyright name="Aitor Alonso" initialYear={2020} />)

      expect(renderResult.getByText('Copyright © 2020 - 2022 Aitor Alonso')).toBeTruthy()
    })
  })
})
