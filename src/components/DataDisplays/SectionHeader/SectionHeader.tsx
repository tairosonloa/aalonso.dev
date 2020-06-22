import React, { FC } from 'react'
import { Typography, TypographyType } from '../Typography/Typography'
import styles from './SectionHeader.module.scss'

type SectionHeaderProps = {
  title: string
  subtitle: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <Typography data-testid="section-title" typographyType={TypographyType.TITLE}>
        {title}
      </Typography>
      <Typography data-testid="section-subtitle" typographyType={TypographyType.TITLE_SMALL}>
        {subtitle}
      </Typography>
    </div>
  )
}
