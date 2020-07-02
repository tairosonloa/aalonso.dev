import { render } from '@testing-library/react'
import * as React from 'react'
import { Header } from './Header'

const headerLinks = [
  { href: '#bio', text: 'About me' },
  { href: '#skills', text: 'Skills' },
  { href: '#career', text: 'Career' },
]

describe('<Header/>', () => {
  it('should match the snapshot', () => {
    const renderResult = render(<Header links={headerLinks} />)
    expect(renderResult).toMatchSnapshot()
  })
})
