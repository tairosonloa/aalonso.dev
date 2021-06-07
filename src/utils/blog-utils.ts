import axios from 'axios'
import { DEV_TO_API_KEY } from '../constants'
import { DevtoBlogPost } from '../containers/types/types'

export const getPosts = async (): Promise<DevtoBlogPost[]> => {
  return (
    await axios.get('https://dev.to/api/articles/me', {
      headers: { 'api-key': DEV_TO_API_KEY },
    })
  ).data
}
