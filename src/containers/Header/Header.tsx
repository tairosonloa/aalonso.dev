import classNames from 'classnames'
import React, { FC } from 'react'
import { Typography, TypographyType } from '../../components/DataDisplays/Typography/Typography'
import { Menu } from '../../components/Menu/Menu'
import { Route } from '../../services/router/Routes'
import styles from './Header.module.scss'

type HeaderProps = {
  links: { href: string | Route; text: string }[]
}

export const Header: FC<HeaderProps> = ({ links }) => {
  return (
    <header className={classNames(styles.container)}>
      <div className={styles.contentContainer}>
        <Typography typographyType={TypographyType.TITLE_BIG} className={styles.title}>
          aa<em>l</em>onso
        </Typography>
        <Menu links={links} className={styles.menu} />
      </div>
    </header>
  )
}

export default Header
