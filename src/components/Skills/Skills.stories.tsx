import React from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { Skills } from './Skills'

export default {
  title: 'Common|Skills',
  component: Skills,
  decorators: [dimensionsDecorator()],
}

export const Default = (): JSX.Element => <Skills />
