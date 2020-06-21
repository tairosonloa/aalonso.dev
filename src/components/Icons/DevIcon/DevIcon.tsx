import classNames from 'classnames'
import React, { ComponentPropsWithRef, FC } from 'react'
import styles from './DevIcon.module.scss'

export enum DevIconName {
  REACT = 'react',
  NODE_JS = 'nodejs',
  TYPESCRIPT = 'typescript',
  HTML = 'html5',
  CSS = 'css3',
  SCSS = 'sass',
  PYTHON = 'python',
  POSTGRESQL = 'postgresql',
  MONGODB = 'mongodb',
  LINUX = 'linux',
  DOCKER = 'docker',
  AWS = 'amazonwebservices',
}

export enum DevIconType {
  ORIGINAL = 'original',
  PLAIN = 'plain',
}

const iconTypeToString: { [key in DevIconName]: string } = {
  [DevIconName.REACT]: DevIconType.ORIGINAL,
  [DevIconName.NODE_JS]: DevIconType.PLAIN,
  [DevIconName.TYPESCRIPT]: DevIconType.PLAIN,
  [DevIconName.HTML]: DevIconType.PLAIN,
  [DevIconName.CSS]: DevIconType.PLAIN,
  [DevIconName.SCSS]: DevIconType.ORIGINAL,
  [DevIconName.PYTHON]: DevIconType.PLAIN,
  [DevIconName.POSTGRESQL]: DevIconType.PLAIN,
  [DevIconName.MONGODB]: DevIconType.PLAIN,
  [DevIconName.LINUX]: DevIconType.PLAIN,
  [DevIconName.DOCKER]: DevIconType.PLAIN,
  [DevIconName.AWS]: DevIconType.PLAIN,
}

export type DevIconProps = {
  name: DevIconName
  type?: DevIconType
  className?: string
  bold?: boolean
}

type IProps = Omit<ComponentPropsWithRef<'i'>, 'color'>

export const DevIcon: FC<IProps & DevIconProps> = ({
  name,
  type,
  className,
  bold = false,
  ...props
}) => {
  return (
    <i
      className={classNames(
        `devicon-${name}-${type || iconTypeToString[name]}`,
        styles.icon,
        className,
        bold && styles.bold,
      )}
      {...props}
    />
  )
}
