import classNames from 'classnames'
import React, { CSSProperties, FC, ReactHTML } from 'react'
import styles from './Text.module.scss'

type TextProps = {
  textType?: TextType
  className?: string
  style?: CSSProperties
  htmlTag?: keyof ReactHTML
}

export enum TextType {
  TITLE_BIG = 'titleBig',
  TITLE = 'title',
  TITLE_SMALL = 'titleSmall',
  PARAGRAPH_LEAD = 'paragraphLead',
  PARAGRAPH = 'paragraph',
  PARAGRAPH_SMALL = 'paragraphSmall',
  FOOTNOTE = 'footNote',
}

const TextTypeToHtmlTag: { [key in TextType]: keyof ReactHTML } = {
  [TextType.TITLE_BIG]: 'h1',
  [TextType.TITLE]: 'h2',
  [TextType.TITLE_SMALL]: 'h3',
  [TextType.PARAGRAPH_LEAD]: 'h4',
  [TextType.PARAGRAPH]: 'p',
  [TextType.PARAGRAPH_SMALL]: 'p',
  [TextType.FOOTNOTE]: 'p',
}

export const Text: FC<TextProps> = ({
  children,
  textType = TextType.PARAGRAPH,
  className,
  style,
  htmlTag,
  ...props
}) => {
  return React.createElement(
    htmlTag || TextTypeToHtmlTag[textType],
    {
      className: classNames(styles.common, styles[textType], className),
      style,
      ...props,
    },
    children,
  )
}
