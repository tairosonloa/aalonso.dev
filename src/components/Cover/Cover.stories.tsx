import React from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { Cover } from './Cover'

export default {
  title: 'Sections|Cover',
  component: Cover,
  decorators: [dimensionsDecorator()],
}

export const Default = (): JSX.Element => <Cover />
