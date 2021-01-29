import { Link } from 'gatsby'
import React, { FC } from 'react'
import { Copyright } from '../../components/Copyright/Copyright'
import { ScrollUpButton } from '../../components/ScrollUpButton/ScrollUpButton'
import { SocialMediaLinks } from '../../components/SocialMediaLinks/SocialMediaLinks'
import { Routes } from '../../services/router/Routes'
import styles from './Footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <ScrollUpButton />
      <Copyright className={styles.copyright} />
      <SocialMediaLinks className={styles.socialMediaLinks} />
      <div>
        <Link className={styles.link} to={Routes.privacyPolicy().getPath()}>
          Privacy & Cookies
        </Link>
      </div>
    </footer>
  )
}

export default Footer
