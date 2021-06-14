import axios from 'axios'
import { DEV_TO_API_KEY } from '../constants'
import { DevtoBlogPost } from '../containers/types/types'
import { ONE_MINUTE } from '../utils/time-constants'
import { getCached } from './cache'

const fetchDevToApi = async <T>(url: string): Promise<T> => {
  return (await axios.get(url, { headers: { 'api-key': DEV_TO_API_KEY } })).data
}

export const getAllPosts = async (): Promise<DevtoBlogPost[]> => {
  return getCached(
    'dev.to.articles',
    async () => fetchDevToApi<DevtoBlogPost[]>('https://dev.to/api/articles/me/published'),
    ONE_MINUTE,
  )
}

export const getPostById = async (id: string | number): Promise<DevtoBlogPost> => {
  return fetchDevToApi<DevtoBlogPost>(`https://dev.to/api/articles/${id}`)
}
