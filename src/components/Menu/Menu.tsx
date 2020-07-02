import classNames from 'classnames'
import React, { FC } from 'react'
import { Typography, TypographyType } from '../DataDisplays/Typography/Typography'
import styles from './Menu.module.scss'

type MenuProps = {
  links: { href: string; text: string }[]
  className?: string
}

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

export const Menu: FC<MenuProps> = ({ links, className }) => {
  return (
    <nav className={classNames(styles.links, className)}>
      {links.map(({ href, text }) => (
        <a href={href} key={text} onClick={smoothScroll} data-testid={text}>
          <Typography typographyType={TypographyType.TITLE_SMALL}>{text}</Typography>
        </a>
      ))}
    </nav>
  )
}
