import classNames from 'classnames'
import React, { CSSProperties, FC, ReactHTML } from 'react'
import sanitize from 'sanitize-html'
import styles from './Typography.module.scss'

type TypographyProps = {
  typographyType?: TypographyType
  className?: string
  style?: CSSProperties
  htmlTag?: keyof ReactHTML
  innerHtml?: string
}

export enum TypographyType {
  TITLE_BIG = 'titleBig',
  TITLE = 'title',
  TITLE_SMALL = 'titleSmall',
  PARAGRAPH_LEAD = 'paragraphLead',
  PARAGRAPH = 'paragraph',
  PARAGRAPH_SMALL = 'paragraphSmall',
  FOOTNOTE = 'footNote',
}

const TextTypeToHtmlTag: { [key in TypographyType]: keyof ReactHTML } = {
  [TypographyType.TITLE_BIG]: 'h1',
  [TypographyType.TITLE]: 'h2',
  [TypographyType.TITLE_SMALL]: 'h3',
  [TypographyType.PARAGRAPH_LEAD]: 'h4',
  [TypographyType.PARAGRAPH]: 'p',
  [TypographyType.PARAGRAPH_SMALL]: 'p',
  [TypographyType.FOOTNOTE]: 'p',
}

export const Typography: FC<TypographyProps> = ({
  children,
  typographyType = TypographyType.PARAGRAPH,
  className,
  style,
  htmlTag,
  innerHtml,
  ...props
}) => {
  return React.createElement(htmlTag || TextTypeToHtmlTag[typographyType], {
    className: classNames(styles.common, styles[typographyType], className),
    style,
    ...(innerHtml
      ? {
          dangerouslySetInnerHTML: {
            __html: sanitize(innerHtml, {
              allowedAttributes: {
                a: ['href', 'name', 'target', 'rel'],
                img: ['src'],
              },
            }),
          },
        }
      : { children }),
    ...props,
  })
}
