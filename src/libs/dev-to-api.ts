import axios from 'axios'
import { DEV_TO_API_KEY } from '../constants'
import { DevtoArticleDetails, DevtoArticleSummary } from '../types/devto'
import { ONE_MINUTE } from '../utils/time-constants'
import { getCached } from './disk-cache'

const fetchDevToApi = async <T>(url: string): Promise<T> => {
  return (await axios.get(url, { headers: { 'api-key': DEV_TO_API_KEY } })).data
}

export const getAllPosts = async (): Promise<DevtoArticleSummary[]> => {
  return getCached(
    'dev.to.articles',
    async () => fetchDevToApi<DevtoArticleSummary[]>('https://dev.to/api/articles/me/published'),
    ONE_MINUTE,
  )
}

export const getPostById = async (id: string | number): Promise<DevtoArticleDetails> => {
  return fetchDevToApi<DevtoArticleDetails>(`https://dev.to/api/articles/${id}`)
}
