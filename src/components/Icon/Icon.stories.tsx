import React from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { Icon, IconName } from './Icon'

export default {
  title: 'Common|Data Display/Icon',
  component: Icon,
  decorators: [dimensionsDecorator()],
}

export const All = (): JSX.Element => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(32px, 1fr))',
      gridGap: 16,
    }}
  >
    {Object.values(IconName).map((iconName) => (
      <Icon name={(iconName as unknown) as IconName} title={iconName} />
    ))}
  </div>
)
