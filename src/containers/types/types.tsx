/* eslint-disable camelcase */
export type DevtoUser = {
  github_username?: string
  name: string
  profile_image?: string
  profile_image_90?: string
  twitter_username?: string
  username?: string
  website_url?: null | string
}

export type DevtoFlareTag = {
  name?: string
  bg_color_hex?: string
  text_color_hex?: string
}

export type DevtoBlogPost = {
  id: number
  title: string
  description: string
  type_of: string
  canonical_url: string
  slug: string
  body_markdown: string
  comments_count: number
  cover_image: string
  page_views_count: number
  path: string
  positive_reactions_count: number
  public_reactions_count: number
  published: boolean
  published_at: string
  published_timestamp: string
  url: string
  user: DevtoUser
  flare_tag?: DevtoFlareTag
  readable_publish_date: string
  collection_id: null | number
  social_image: string
  created_at: string
  edited_at: string | null
  crossposted_at: null | string
  last_comment_at: string
  body_html: string
}

export type AllBlogPosts = {
  devtoBlogPosts: DevtoBlogPost[]
}
