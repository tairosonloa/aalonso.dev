import React, { FC } from 'react'
import { Text, TextType } from '../Text/Text'
import styles from './SectionHeader.module.scss'

type SectionHeaderProps = {
  title: string
  subtitle: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <Text data-testid="section-title" textType={TextType.TITLE}>
        {title}
      </Text>
      <Text data-testid="section-subtitle" textType={TextType.TITLE_SMALL}>
        {subtitle}
      </Text>
    </div>
  )
}
