import classNames from 'classnames'
import React, { FC } from 'react'
import styles from './Section.module.scss'

type SectionProps = {
  darkBackground?: boolean
  sectionId?: string
  className?: string
}

export const Section: FC<SectionProps> = ({ sectionId, children, className }) => {
  return (
    <div id={sectionId} className={classNames(styles.container, className)}>
      {children}
    </div>
  )
}
