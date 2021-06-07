import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
import { DEV_TO_API_KEY } from '../constants'
import { DevtoBlogPost } from '../containers/types/types'

const cache = setupCache({
  maxAge: 1000,
})

const devToApi = axios.create({
  adapter: cache.adapter,
})

const fetchDevToApi = async <T>(url: string): Promise<T> => {
  return (await devToApi(url, { headers: { 'api-key': DEV_TO_API_KEY } })).data
}

export const getPosts = async (): Promise<DevtoBlogPost[]> => {
  return fetchDevToApi<DevtoBlogPost[]>('https://dev.to/api/articles/me')
}

export const getPost = async (id: string | number): Promise<DevtoBlogPost> => {
  return fetchDevToApi<DevtoBlogPost>(`https://dev.to/api/articles/${id}`)
}
