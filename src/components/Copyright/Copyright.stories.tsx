import React from 'react'
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { Copyright } from './Copyright'

export default {
  title: 'Common|DataDisplay/Copyright',
  component: Copyright,
  decorators: [dimensionsDecorator()],
}

export const Default = (): JSX.Element => <Copyright name="Aitor Alonso" initialYear={2020} />
