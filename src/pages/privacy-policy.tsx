import React, { FC } from 'react'
import { PrivacyPolicy } from '../containers/PrivacyPolicy/PrivacyPolicy'

const PrivacyPolicyPage: FC = () => {
  return <PrivacyPolicy />
}

export const getServerSideProps = async (): Promise<Record<string, unknown>> =>
  Promise.resolve({ props: {} })

export default PrivacyPolicyPage
