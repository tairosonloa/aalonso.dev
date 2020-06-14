import React from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { Bio } from './Bio'

export default {
  title: 'Common|Bio',
  component: Bio,
  decorators: [dimensionsDecorator()],
}

export const Default = (): JSX.Element => <Bio />
