import React from 'react'
import { dimensionsDecorator } from '../../../../.storybook/utils/Dimensions'
import { CareerStep } from './CareerStep'

export default {
  title: 'Common|CareerStep',
  component: CareerStep,
  decorators: [dimensionsDecorator()],
}

const props = {
  date: '2015 - 2019',
  title: "Bachelor's Degree in Computer Science and Engineering",
  description:
    "Got my Bachelor's Degree in Computer Science and Engineering at Universidad Carlos III de Madrid with honors. Specialized in artificial intelligence and data analysis.",
}

export const Default = (): JSX.Element => <CareerStep {...props} />
