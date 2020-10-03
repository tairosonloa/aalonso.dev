import React from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { ScrollUpButton } from './ScrollUpButton'

export default {
  title: 'Common|ScrollUpButton',
  component: ScrollUpButton,
  decorators: [dimensionsDecorator()],
}

export const Default = (): JSX.Element => <ScrollUpButton />
