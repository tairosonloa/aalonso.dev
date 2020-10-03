import React, { FC } from 'react'
import { IconName, RemixIcon } from '../Icons/RemixIcon/RemixIcon'
import styles from './ScrollUpButton.module.scss'

export const ScrollUpButton: FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      className={styles.scrollTop}
      data-testid="scrollUpButton"
    >
      <RemixIcon name={IconName.ARROW_UP} />
    </button>
  )
}
