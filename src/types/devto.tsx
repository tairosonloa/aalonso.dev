/* eslint-disable camelcase */
export type DevtoUser = {
  name: string
  username: string
  profile_image: string
  profile_image_90: string
  github_username: string
  twitter_username: string
  website_url: null | string
}

export type DevtoFlareTag = {
  name?: string
  bg_color_hex?: string
  text_color_hex?: string
}

type DevtoArticleCommon = {
  type_of: 'article'
  id: number
  title: string
  description: string
  canonical_url: string
  slug: string
  body_markdown: string
  comments_count: number
  cover_image: string
  path: string
  positive_reactions_count: number
  public_reactions_count: number
  published_at: string
  published_timestamp: string
  url: string
  user: DevtoUser
  flare_tag?: DevtoFlareTag
}

export type DevtoArticleSummary = DevtoArticleCommon & {
  published: boolean
  comments_count: number
  page_views_count: number
  tag_list: string[]
}

export type DevtoArticleDetails = DevtoArticleCommon & {
  readable_publish_date: string
  comments_count: number
  collection_id: number
  social_image: string
  created_at: string
  edited_at: string
  crossposted_at: null | string
  last_comment_at: string
  reading_time_minutes: number
  tag_list: string
  tags: string[]
  body_html: string
}
