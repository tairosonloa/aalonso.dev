import loadable from '@loadable/component'
import { NextSeo } from 'next-seo'
import { NextSeoProps, OpenGraph } from 'next-seo/lib/types.d'
import React, { FC } from 'react'
import { Router } from '../../services/router/Router'
import { Route } from '../../services/router/Routes'
import { Header } from '../Header/Header'

const Footer = loadable(() => import('../Footer/Footer'))

type AtLeast<T, K extends keyof T> = Partial<T> & Required<Pick<T, K>>
export type OverwriteDefaultSeo = AtLeast<NextSeoProps, 'canonical' | 'openGraph'> & {
  openGraph: AtLeast<OpenGraph, 'url'>
}

type LayoutProps = {
  headerLinks: { href: string | Route; text: string }[]
  router: Router
  fixedHeader?: boolean
  seo: OverwriteDefaultSeo
}

export const Layout: FC<LayoutProps> = ({ headerLinks, router, fixedHeader, seo, children }) => {
  return (
    <>
      <NextSeo {...seo} />
      <Header links={headerLinks} router={router} fixed={fixedHeader} />
      {children}
      <Footer router={router} />
    </>
  )
}
