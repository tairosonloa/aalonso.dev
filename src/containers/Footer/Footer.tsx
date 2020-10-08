import loadable from '@loadable/component'
import React, { FC } from 'react'
import { Copyright } from '../../components/Copyright/Copyright'
import { Router } from '../../services/router/Router'
import { Routes } from '../../services/router/Routes'
import styles from './Footer.module.scss'

const ScrollUpButton = loadable(() => import('../../components/ScrollUpButton/ScrollUpButton'))
const SocialMediaLinks = loadable(
  () => import('../../components/SocialMediaLinks/SocialMediaLinks'),
)

type FooterProps = {
  router: Router
}

export const Footer: FC<FooterProps> = ({ router }) => {
  return (
    <footer className={styles.container}>
      <ScrollUpButton />
      <Copyright className={styles.copyright} />
      <SocialMediaLinks className={styles.socialMediaLinks} />
      <div>
        <a
          className={styles.link}
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

export default Footer
