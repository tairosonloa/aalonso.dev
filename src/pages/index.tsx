import React, { FC } from 'react'
import { Bio } from '../containers/Bio/Bio'
import { Career } from '../containers/Career/Career'
import { Cover } from '../containers/Cover/Cover'
import { Skills } from '../containers/Skills/Skills'

const Index: FC = () => {
  return (
    <>
      <Cover />
      <Bio />
      <Skills />
      <Career />
    </>
  )
}

export const getServerSideProps = async (): Promise<Record<string, unknown>> =>
  Promise.resolve({ props: {} })

export default Index
