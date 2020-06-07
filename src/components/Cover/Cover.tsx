import React, { FC } from 'react'
import { Text, TextType } from '../Text/Text'
import styles from './Cover.module.scss'

export const Cover: FC = () => {
  return (
    <div className={styles.container}>
      <Text className={styles.title} textType={TextType.TITLE_BIG} htmlTag="h2">
        Aitor Alonso
      </Text>
      <Text className={styles.subtitle} textType={TextType.PARAGRAPH_LEAD} htmlTag="h1">
        Full Stack Software Developer Engineer and DevOps
      </Text>
    </div>
  )
}
