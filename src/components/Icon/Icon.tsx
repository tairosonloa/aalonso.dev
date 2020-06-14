import classNames from 'classnames'
import React, { ComponentPropsWithRef, FC } from 'react'
import styles from './Icon.module.scss'

export enum IconName {
  GITHUB = 'github',
  LINKEDIN = 'linkedin-box',
  EMAIL = 'mail',
}

export enum IconType {
  FILL = 'fill',
  LINE = 'line',
  CIRCLE_LINE = 'circle-line',
  NONE = 'none',
}

const iconTypeToString: { [key in IconName]: string } = {
  [IconName.GITHUB]: IconType.FILL,
  [IconName.LINKEDIN]: IconType.FILL,
  [IconName.EMAIL]: IconType.FILL,
}

export type IconProps = {
  name: IconName
  type?: IconType
  size?: number
  className?: string
  bold?: boolean
}

type IProps = Omit<ComponentPropsWithRef<'i'>, 'color'>

export const Icon: FC<IProps & IconProps> = ({ name, type, className, bold = false, ...props }) => {
  return (
    <i
      className={classNames(
        `ri-${name}-${type || iconTypeToString[name]}`,
        styles.icon,
        className,
        bold && styles.bold,
      )}
      {...props}
    />
  )
}
