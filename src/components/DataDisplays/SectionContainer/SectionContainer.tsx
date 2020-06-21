import classNames from 'classnames'
import React, { FC } from 'react'
import styles from './SectionContainer.module.scss'

type SectionContainerProps = {
  darkBackground?: boolean
}

export const SectionContainer: FC<SectionContainerProps> = ({
  darkBackground = false,
  children,
}) => {
  return (
    <div className={classNames(styles.container, darkBackground ? styles.dark : styles.light)}>
      {children}
    </div>
  )
}
