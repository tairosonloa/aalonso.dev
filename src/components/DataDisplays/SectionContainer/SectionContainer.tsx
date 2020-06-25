import classNames from 'classnames'
import React, { FC } from 'react'
import styles from './SectionContainer.module.scss'

type SectionContainerProps = {
  darkBackground?: boolean
  sectionId?: string
}

export const SectionContainer: FC<SectionContainerProps> = ({
  darkBackground = false,
  sectionId,
  children,
}) => {
  return (
    <div
      id={sectionId}
      className={classNames(styles.container, darkBackground ? styles.dark : styles.light)}
    >
      {children}
    </div>
  )
}
