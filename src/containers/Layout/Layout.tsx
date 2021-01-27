import React, { FC } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Route } from '../../services/router/Routes'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.scss'

export type HeaderLink = { href: string | Route; text: string }

type LayoutProps = {
  headerLinks?: HeaderLink[]
  showFooter?: boolean
}

export const Layout: FC<LayoutProps> = ({ headerLinks = [], children, showFooter = false }) => {
  // TODO: change cookies link
  // TODO: check routers
  return (
    <>
      <div className={styles.container}>
        <Header links={headerLinks} router={null as any} />
        <main className={styles.main}>{children}</main>
        {showFooter && <Footer router={null as any} />}
      </div>
      <CookieConsent expires={365} buttonText="Got it" containerClasses="cookiesBanner">
        This site uses cookies to provide you with a great user experience, among others.{' '}
        <a href="#">Read the Privacy & Cookies Policy</a>.
      </CookieConsent>
    </>
  )
}
