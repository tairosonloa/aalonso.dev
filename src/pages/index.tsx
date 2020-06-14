import React, { FC } from 'react'
import { Bio } from '../components/Bio/Bio'
import { Cover } from '../components/Cover/Cover'

const Index: FC = () => {
  return (
    <>
      <Cover />
      <Bio />
    </>
  )
}

export const getServerSideProps = async (): Promise<Record<string, unknown>> =>
  Promise.resolve({ props: {} })

export default Index
