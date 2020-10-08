import classNames from 'classnames'
import React, { FC, useState } from 'react'
import { Typography, TypographyType } from '../../components/DataDisplays/Typography/Typography'
import { Menu } from '../../components/Menu/Menu'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { Router } from '../../services/router/Router'
import { Route } from '../../services/router/Routes'
import styles from './Header.module.scss'

type HeaderProps = {
  links: { href: string | Route; text: string }[]
  router: Router
  fixed?: boolean
}

export const Header: FC<HeaderProps> = ({ links, router, fixed = false }) => {
  const [solid, setSolid] = useState<boolean>(fixed)
  const [shadow, setShadow] = useState<boolean>(false)
  const HEADER_HEIGHT = 75

  useScrollPosition(
    ({ currentPosition }) => {
      if (!fixed) setSolid(currentPosition.y > window.innerHeight - HEADER_HEIGHT)
      setShadow(currentPosition.y > HEADER_HEIGHT)
    },
    [solid, shadow],
  )

  return (
    <header
      className={classNames(
        styles.container,
        solid && styles.solid,
        solid && shadow && styles.shadow,
      )}
    >
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          {solid && (
            <Typography typographyType={TypographyType.TITLE_BIG} className={styles.title}>
              aa<em>l</em>onso
            </Typography>
          )}
        </div>
        <Menu links={links} router={router} className={styles.menu} />
      </div>
    </header>
  )
}

export default Header
