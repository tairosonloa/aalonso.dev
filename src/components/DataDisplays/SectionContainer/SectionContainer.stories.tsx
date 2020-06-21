import React from 'react'
import { dimensionsDecorator } from '../../../../.storybook/utils/Dimensions'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { SectionContainer } from './SectionContainer'

export default {
  title: 'Common|DataDisplay/SectionContainer',
  component: SectionContainer,
  decorators: [dimensionsDecorator()],
}

export const Default = (): JSX.Element => (
  <SectionContainer>
    <SectionHeader title="Title" subtitle="Subtitle" />
    Content
  </SectionContainer>
)
