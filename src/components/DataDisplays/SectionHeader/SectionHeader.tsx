import classNames from 'classnames'
import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { Typography, TypographyType } from '../Typography/Typography'
import styles from './SectionHeader.module.scss'

type SectionHeaderProps = {
  title: string
  subtitle: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle }) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <div
      className={classNames(
        styles.container,
        inView ? 'animate__animated animate__fadeInDown' : styles.hidden,
      )}
      ref={ref}
    >
      <Typography data-testid="section-title" typographyType={TypographyType.TITLE}>
        {title}
      </Typography>
      <Typography data-testid="section-subtitle" typographyType={TypographyType.TITLE_SMALL}>
        {subtitle}
      </Typography>
    </div>
  )
}
