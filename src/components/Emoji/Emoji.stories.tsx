import React from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { Emoji } from './Emoji'

export default {
  title: 'Common|Emoji',
  component: Emoji,
  decorators: [dimensionsDecorator()],
}

export const Default = (): JSX.Element => <Emoji emoji="❤️" label="hearth" />
