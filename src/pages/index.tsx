import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Bio } from '../containers/Bio/Bio'
import { Career } from '../containers/Career/Career'
import { Cover } from '../containers/Cover/Cover'
import { Footer } from '../containers/Footer/Footer'
import { Header } from '../containers/Header/Header'
import { Skills } from '../containers/Skills/Skills'
import { RouterClientNext } from '../services/router/RouterClientNext'

const Index: FC = () => {
  const nextRouter = useRouter()
  const router = new RouterClientNext(nextRouter)

  const headerLinks = [
    { href: '#bio', text: 'About me' },
    { href: '#skills', text: 'Skills' },
    { href: '#career', text: 'Career' },
  ]

  return (
    <>
      <Header links={headerLinks} />
      <Cover />
      <Bio />
      <Skills />
      <Career />
      <Footer router={router} />
    </>
  )
}

export default Index
