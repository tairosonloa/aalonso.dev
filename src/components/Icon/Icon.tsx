import classNames from 'classnames'
import React, { ComponentPropsWithRef, FC } from 'react'
import styles from './Icon.module.scss'

export enum IconName {
  GITHUB = 'github',
  LINKEDIN = 'linkedin-box',
  EMAIL = 'mail',
  TECH_SKILLS = 'code-box',
  SOFT_SKILLS = 'hand-heart',
  TEAM_WORK = 'team',
  COMMUNICATION = 'chat-smile-2',
  EMPATHY = 'heart',
  TIME_MANAGMENT = 'timer',
  PROBLEM_SOLVING = 'pencil-ruler-2',
  ACCOUNTABILITY = 'scales-3',
  OPEN_MINDEDNESS = 'earth',
  CREATIVITY = 'lightbulb',
  CURIOUSITY = 'questionnaire',
  ADAPTABILITY = 'seedling',
  PROACTIVITY = 'run',
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
  [IconName.TECH_SKILLS]: IconType.FILL,
  [IconName.SOFT_SKILLS]: IconType.FILL,
  [IconName.TEAM_WORK]: IconType.FILL,
  [IconName.COMMUNICATION]: IconType.FILL,
  [IconName.EMPATHY]: IconType.FILL,
  [IconName.TIME_MANAGMENT]: IconType.LINE,
  [IconName.PROBLEM_SOLVING]: IconType.LINE,
  [IconName.ACCOUNTABILITY]: IconType.LINE,
  [IconName.OPEN_MINDEDNESS]: IconType.FILL,
  [IconName.CREATIVITY]: IconType.LINE,
  [IconName.CURIOUSITY]: IconType.FILL,
  [IconName.ADAPTABILITY]: IconType.FILL,
  [IconName.PROACTIVITY]: IconType.FILL,
}

export type IconProps = {
  name: IconName
  type?: IconType
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
