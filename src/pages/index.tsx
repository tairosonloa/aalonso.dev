import React, { FC } from 'react'

const Index: FC = () => {
  return <h1>Hello world!</h1>
}

export const getServerSideProps = async (): Promise<Record<string, unknown>> =>
  Promise.resolve({ props: {} })

export default Index
