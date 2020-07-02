import React from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { Menu } from './Menu'

export default {
  title: 'Common|Menu',
  component: Menu,
  decorators: [dimensionsDecorator()],
}

const links = [
  { href: '#bio', text: 'About me' },
  { href: '#skills', text: 'Skills' },
  { href: '#career', text: 'Career' },
]

export const Default = (): JSX.Element => <Menu links={links} />
