import classNames from 'classnames'
import React, { FC, useState } from 'react'
import { Typography, TypographyType } from '../../components/DataDisplays/Typography/Typography'
import { Menu } from '../../components/Menu/Menu'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import styles from './Header.module.scss'

type HeaderProps = {
  links: { href: string; text: string }[]
}

export const Header: FC<HeaderProps> = ({ links }) => {
  const [solid, setSolid] = useState<boolean>(false)
  const HEADER_HEIGHT = 70

  useScrollPosition(
    ({ currentPosition }) => {
      setSolid(currentPosition.y > window.innerHeight - HEADER_HEIGHT)
    },
    [solid],
  )

  return (
    <header className={classNames(styles.container, solid && styles.solid)}>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          {solid && (
            <Typography typographyType={TypographyType.TITLE_BIG} className={styles.title}>
              aa<em>l</em>onso
            </Typography>
          )}
        </div>
        <Menu links={links} className={styles.menu} />
      </div>
    </header>
  )
}
