import classNames from 'classnames'
import React, { FC, useEffect, useState } from 'react'
import { Router } from '../../services/router/Router'
import { Route } from '../../services/router/Routes'
import { Typography, TypographyType } from '../DataDisplays/Typography/Typography'
import { IconName, RemixIcon } from '../Icons/RemixIcon/RemixIcon'
import styles from './Menu.module.scss'

type MenuProps = {
  links: { href: string | Route; text: string }[]
  router: Router
  className?: string
}

export const Menu: FC<MenuProps> = ({ links, router, className }) => {
  const [menuExpanded, setMenuExpanded] = useState<boolean>(false)

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href')
    const element = document.querySelector((id as unknown) as string)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }

    if (menuExpanded) {
      setMenuExpanded(false)
    }
  }

  useEffect(() => {
    if (menuExpanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuExpanded])

  return (
    <div className={classNames(styles.container, className)}>
      <button
        type="button"
        aria-label="Menu"
        className={styles.button}
        onClick={() => setMenuExpanded(!menuExpanded)}
      >
        <RemixIcon
          name={IconName.MENU}
          className={classNames(styles.buttonIcon, !menuExpanded && styles.activeIcon)}
        />
        <RemixIcon
          name={IconName.CLOSE}
          className={classNames(
            styles.buttonIcon,
            menuExpanded && styles.activeIcon,
            styles.closeIcon,
          )}
        />
      </button>
      <nav className={classNames(styles.links, menuExpanded && styles.mobileLinks)}>
        {links.map(({ href, text }) => {
          if (typeof href === 'string') {
            return (
              <a href={href} key={text} onClick={smoothScroll} data-testid={text}>
                <Typography typographyType={TypographyType.TITLE_SMALL} htmlTag="h4">
                  {text}
                </Typography>
              </a>
            )
          }
          return (
            <a
              href={href.getPath()}
              key={text}
              onClick={(e) => {
                e.preventDefault()
                router.pushTo(href)
              }}
              data-testid={text}
            >
              <Typography typographyType={TypographyType.TITLE_SMALL} htmlTag="h4">
                {text}
              </Typography>
            </a>
          )
        })}
      </nav>
    </div>
  )
}
