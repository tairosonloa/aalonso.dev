import getNextConfig from 'next/config'

type PublicRuntimeConfig = Record<string, unknown>

export function getPublicRuntimeConfig(): PublicRuntimeConfig {
  const nextConfig = getNextConfig()
  if (!nextConfig) {
    return {}
  }

  return nextConfig.publicRuntimeConfig
}

type ServerRuntimeConfig = Record<string, unknown>

export function getServerSideConfig(): ServerRuntimeConfig {
  const nextConfig = getNextConfig()

  return nextConfig.serverRuntimeConfig
}
