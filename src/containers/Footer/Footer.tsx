import React, { FC } from 'react'
import { Copyright } from '../../components/Copyright/Copyright'
import { SocialMediaLinks } from '../../components/SocialMediaLinks/SocialMediaLinks'
import { Router } from '../../services/router/Router'
import { Routes } from '../../services/router/Routes'
import styles from './Footer.module.scss'

type FooterProps = {
  router: Router
}

export const Footer: FC<FooterProps> = ({ router }) => {
  return (
    <footer className={styles.container}>
      <Copyright className={styles.copyright} />
      <SocialMediaLinks className={styles.socialMediaLinks} />
      <div>
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
    </footer>
  )
}
