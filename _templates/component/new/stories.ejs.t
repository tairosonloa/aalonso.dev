---
to: src/<%= path %>/<%= name %>/<%= name %>.stories.tsx
---
import React from "react"
import { dimensionsDecorator } from '../../../.storybook/utils/Dimensions'
import { <%= name %> } from "./<%= name %>"

export default {
  title: "Common|<%= name %>",
  component: <%= name %>,
  decorators: [dimensionsDecorator()],
}

export const Default = (): JSX.Element => <<%= name %> />
