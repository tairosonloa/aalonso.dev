import axios from 'axios'
import { DEV_TO_API_KEY } from '../constants'
import { DevtoBlogPost } from '../containers/types/types'

export const getAllPosts = async (): Promise<DevtoBlogPost[]> => {
  return (
    await axios.get('https://dev.to/api/articles/me/published', {
      headers: { 'api-key': DEV_TO_API_KEY },
    })
  ).data
}

export const getPostById = async (id: string | number): Promise<DevtoBlogPost> => {
  return (
    await axios.get(`https://dev.to/api/articles/${id}`, {
      headers: { 'api-key': DEV_TO_API_KEY },
    })
  ).data
}
