import React, { FC } from 'react'
import { Cover } from '../components/Cover/Cover'

const Index: FC = () => {
  return <Cover />
}

export const getServerSideProps = async (): Promise<Record<string, unknown>> =>
  Promise.resolve({ props: {} })

export default Index
