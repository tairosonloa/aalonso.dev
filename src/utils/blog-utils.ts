import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
import { DEV_TO_API_KEY } from '../constants'
import { DevtoBlogPost } from '../containers/types/types'

const sleep = async (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms))

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
})

const devToApi = axios.create({
  adapter: cache.adapter,
})

export const getPosts = async (): Promise<DevtoBlogPost[]> => {
  sleep(Math.round(Math.random() * 5000 + 1000))
  const posts = (
    await devToApi('https://dev.to/api/articles/me', {
      headers: { 'api-key': DEV_TO_API_KEY },
    })
  ).data
  return posts
}
