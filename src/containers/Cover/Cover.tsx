import React, { FC } from 'react'
import { Typography, TypographyType } from '../../components/DataDisplays/Typography/Typography'
import styles from './Cover.module.scss'

export const Cover: FC = () => {
  return (
    <div className={styles.container}>
      <Typography className={styles.title} typographyType={TypographyType.TITLE_BIG} htmlTag="h2">
        Aitor Alonso
      </Typography>
      <Typography
        className={styles.subtitle}
        typographyType={TypographyType.TITLE_SMALL}
        htmlTag="h1"
      >
        Full-Stack Software Developer Engineer
      </Typography>
    </div>
  )
}
