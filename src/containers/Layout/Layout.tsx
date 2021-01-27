import React, { FC } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Router } from '../../services/router/Router'
import { Route } from '../../services/router/Routes'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.scss'

export type HeaderLink = { href: string | Route; text: string }

type LayoutProps = {
  headerLinks: HeaderLink[]
  router: Router
  showFooter?: boolean
}

export const Layout: FC<LayoutProps> = ({
  headerLinks,
  router = null as any, // TODO: check router
  children,
  showFooter = false,
}) => {
  // TODO: change cookies link
  return (
    <>
      <div className={styles.container}>
        <Header links={headerLinks} router={router} />
        <main className={styles.main}>{children}</main>
        {showFooter && <Footer router={router} />}
      </div>
      <CookieConsent expires={365} buttonText="Got it" containerClasses="cookiesBanner">
        This site uses cookies to provide you with a great user experience, among others.{' '}
        <a href="#">Read the Privacy & Cookies Policy</a>.
      </CookieConsent>
    </>
  )
}
