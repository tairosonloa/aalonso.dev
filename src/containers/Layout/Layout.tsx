import { Link } from 'gatsby'
import React, { FC } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Route, Routes } from '../../services/router/Routes'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.scss'

export type HeaderLink = { href: string | Route; text: string }

type LayoutProps = {
  headerLinks?: HeaderLink[]
  showFooter?: boolean
}

export const Layout: FC<LayoutProps> = ({ headerLinks = [], children, showFooter = false }) => {
  return (
    <>
      <div className={styles.container}>
        <Header links={headerLinks} />
        <main className={styles.main}>{children}</main>
        {showFooter && <Footer />}
      </div>
      <CookieConsent expires={365} buttonText="Got it" containerClasses="cookiesBanner">
        This site uses cookies to provide you with a great user experience, among others.{' '}
        <Link to={Routes.privacyPolicy().getPath()}>Read the Privacy & Cookies Policy</Link>.
      </CookieConsent>
    </>
  )
}
