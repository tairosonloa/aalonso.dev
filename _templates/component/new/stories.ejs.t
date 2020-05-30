---
to: src/<%= path %>/<%= name %>/<%= name %>.stories.tsx
---
import React from "react"
import { <%= name %> } from "./<%= name %>"

export default {
  title: "Common|<%= name %>",
  component: <%= name %>,
  decorators: [dimensionsDecorator()],
}

export const Default = () => <<%= name %> />
