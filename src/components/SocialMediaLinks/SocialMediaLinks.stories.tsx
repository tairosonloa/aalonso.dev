import React from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { SocialMediaLinks } from './SocialMediaLinks'

export default {
  title: 'Common|SocialMediaLinks',
  component: SocialMediaLinks,
  decorators: [dimensionsDecorator()],
}

export const Default = (): JSX.Element => <SocialMediaLinks />
