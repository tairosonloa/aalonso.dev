import React from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { RouterFake } from '../../services/router/RouterFake'
import { Menu } from './Menu'

export default {
  title: 'Common|Menu',
  component: Menu,
  decorators: [dimensionsDecorator()],
}

const routerFake = new RouterFake()
const links = [
  { href: '#bio', text: 'About me' },
  { href: '#skills', text: 'Skills' },
  { href: '#career', text: 'Career' },
]

export const Default = (): JSX.Element => <Menu links={links} router={routerFake} />
