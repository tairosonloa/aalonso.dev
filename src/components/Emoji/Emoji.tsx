import React, { FC } from 'react'
import styles from './Emoji.module.scss'

type EmojiProps = {
  emoji: string
  label: string
}

export const Emoji: FC<EmojiProps> = ({ emoji, label }) => {
  return (
    <span role="img" aria-label={label} className={styles.emoji}>
      {emoji}
    </span>
  )
}

export default Emoji
