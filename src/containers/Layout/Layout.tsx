import { NextSeo } from 'next-seo'
import { NextSeoProps, OpenGraph } from 'next-seo/lib/types.d'
import React, { FC } from 'react'
import { Router } from '../../services/router/Router'
import { Route } from '../../services/router/Routes'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.scss'

type AtLeast<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>
export type OverwriteDefaultSeo = AtLeast<NextSeoProps, 'canonical' | 'openGraph'> & {
  openGraph: AtLeast<OpenGraph, 'url'>
}

export type HeaderLink = { href: string | Route; text: string }

type LayoutProps = {
  headerLinks: HeaderLink[]
  router: Router
  seo: OverwriteDefaultSeo
  showFooter?: boolean
}

export const Layout: FC<LayoutProps> = ({
  headerLinks,
  router,
  seo,
  children,
  showFooter = false,
}) => {
  return (
    <>
      <NextSeo {...seo} />
      <div className={styles.container}>
        <Header links={headerLinks} router={router} />
        <main>{children}</main>
        {showFooter && <Footer router={router} />}
      </div>
    </>
  )
}
