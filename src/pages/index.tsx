import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Bio } from '../containers/Bio/Bio'
import { Career } from '../containers/Career/Career'
import { Cover } from '../containers/Cover/Cover'
import { Footer } from '../containers/Footer/Footer'
import { Skills } from '../containers/Skills/Skills'
import { RouterClientNext } from '../services/router/RouterClientNext'

const Index: FC = () => {
  const nextRouter = useRouter()
  const router = new RouterClientNext(nextRouter)

  return (
    <>
      <Cover />
      <Bio />
      <Skills />
      <Career />
      <Footer router={router} />
    </>
  )
}

export const getServerSideProps = async (): Promise<Record<string, unknown>> =>
  Promise.resolve({ props: {} })

export default Index
