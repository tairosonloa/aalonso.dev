import React from 'react'
import { dimensionsDecorator } from '../../../../.storybook/utils/Dimensions'
import { DevIcon, DevIconName } from './DevIcon'

export default {
  title: 'Common|Icons/DevIcon',
  component: DevIcon,
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
    {Object.values(DevIconName).map((iconName) => (
      <DevIcon name={(iconName as unknown) as DevIconName} />
    ))}
  </div>
)
