import React, { FC } from 'react'
import { Router } from '../../services/router/Router'
import { Route } from '../../services/router/Routes'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

type LayoutProps = {
  headerLinks: { href: string | Route; text: string }[]
  router: Router
  fixedHeader?: boolean
}

export const Layout: FC<LayoutProps> = ({ headerLinks, router, fixedHeader, children }) => {
  return (
    <>
      <Header links={headerLinks} router={router} fixed={fixedHeader} />
      {children}
      <Footer router={router} />
    </>
  )
}
