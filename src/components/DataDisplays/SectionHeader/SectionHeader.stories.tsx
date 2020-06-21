import React from 'react'
import { dimensionsDecorator } from '../../../../.storybook/utils/Dimensions'
import { SectionHeader } from './SectionHeader'

export default {
  title: 'Common|DataDisplay/SectionHeader',
  component: SectionHeader,
  decorators: [dimensionsDecorator()],
}

export const Default = (): JSX.Element => <SectionHeader title="Title" subtitle="Subtitle" />
