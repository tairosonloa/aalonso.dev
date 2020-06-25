import classNames from 'classnames'
import React, { FC, useState } from 'react'
import { Typography, TypographyType } from '../../components/DataDisplays/Typography/Typography'
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

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href')
    const element = document.querySelector((id as unknown) as string)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

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
        <nav className={styles.links}>
          {links.map(({ href, text }) => (
            <a href={href} key={text} onClick={smoothScroll} data-testid={text}>
              <Typography typographyType={TypographyType.TITLE_SMALL}>{text}</Typography>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
