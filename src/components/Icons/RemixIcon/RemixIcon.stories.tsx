import React from 'react'
import { dimensionsDecorator } from '../../../../.storybook/utils/Dimensions'
import { IconName, RemixIcon } from './RemixIcon'

export default {
  title: 'Common|Icons/RemixIcon',
  component: RemixIcon,
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
      <RemixIcon name={(iconName as unknown) as IconName} />
    ))}
  </div>
)
