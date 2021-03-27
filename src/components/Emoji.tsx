import React, { FC } from 'react'

type EmojiProps = {
  emoji: string
  label: string
}

const Emoji: FC<EmojiProps> = ({ emoji, label }) => {
  return (
    <span role="img" aria-label={label}>
      {emoji}
    </span>
  )
}

export default Emoji
