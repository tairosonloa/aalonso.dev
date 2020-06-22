import React, { FC } from 'react'
import { Copyright } from '../../components/Copyright/Copyright'
import { SocialMediaLinks } from '../../components/SocialMediaLinks/SocialMediaLinks'
import { Router } from '../../services/router/Router'
import { Routes } from '../../services/router/Routes'
import styles from './Footer.module.scss'

export type FooterProps = {
  router: Router
}

export const Footer: FC<FooterProps> = ({ router }) => {
  return (
    <div className={styles.container}>
      <Copyright className={styles.copyright} />
      <SocialMediaLinks className={styles.socialMediaLinks} />
      <div className={styles.link}>
        <a
          href={Routes.privacyPolicy().getPath()}
          onClick={(e) => {
            e.preventDefault()
            router.pushTo(Routes.privacyPolicy())
          }}
        >
          Privacy & Cookies
        </a>
      </div>
    </div>
  )
}
