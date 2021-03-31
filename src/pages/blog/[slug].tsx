import { format, parseISO } from 'date-fns'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { NextSeoProps } from 'next-seo/lib/types.d'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import sanitize from 'sanitize-html'
import Emoji from '../../components/Emoji'
import { DOMAIN, SOCIAL_MEDIA_URLS } from '../../constants'
import { DevtoBlogPost } from '../../containers/types/types'

export type BlogPageProps = {
  blogPost: DevtoBlogPost
}

const BlogPage: NextPage<BlogPageProps> = ({ blogPost }) => {
  const router = useRouter()
  let seo: NextSeoProps = {}
  const updateSeo = () => {
    const url = `https://${DOMAIN}/blog/${blogPost.slug}`
    seo = {
      title: blogPost.title,
      canonical: url,
      openGraph: { url },
    }
  }
  if (blogPost) {
    updateSeo()
  }
  useEffect(() => {
    updateSeo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogPost])

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          rel="stylesheet"
          key="prismjs-css"
        />
      </Head>
      <NextSeo {...seo} />
      {blogPost && (
        <article
          className="text-gray-300 sm:px-4 py-16 pt-20 md:pt-28"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="w-full mx-auto mb-8 text-left sm:w-11/12 md:w-3/4 lg:w-1/2">
            <img
              src={blogPost.cover_image}
              className="object-fit h-auto md:object-cover w-full md:max-h-64 bg-center rounded-lg"
              alt="Blog Cover"
            />
            <h1
              className="px-4 sm:px-0 mt-6 mb-6 text-3xl font-bold leading-tight text-white md:text-4xl"
              itemProp="headline"
              title={blogPost.title}
            >
              {blogPost.title}
            </h1>

            <div className="flex justify-between px-4 sm:px-0">
              <div className="flex items-center ">
                <div className="avatar ">
                  <img
                    className="rounded-full w-14 h-14"
                    src={blogPost.user.profile_image_90}
                    alt={blogPost.user.name}
                  />
                </div>
                <div className="ml-2">
                  <p className=" font-semibold "> {blogPost.user.name}</p>
                  <p className="text-sm text-gray-400">
                    {format(parseISO(blogPost.published_at), 'MMMM dd, yyyy')}
                  </p>
                </div>
              </div>
              <div className="self-center">
                <p className="text-sm flex justify-end text-gray-400">
                  {blogPost.public_reactions_count}&nbsp;
                  <Emoji emoji="❤️" label="likes" />
                </p>
              </div>
            </div>
          </div>
          <div
            className="px-4 sm:px-0 text-gray-300 w-full mx-auto prose md:prose 2xl:prose-lg md:w-3/4 lg:w-1/2"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: sanitize(blogPost.body_html) }}
          />
          <p className="mt-4 px-4 sm:px-0 text-gray-300 w-full mx-auto prose md:prose 2xl:prose-lg md:w-3/4 lg:w-1/2">
            --
            <br />
            (You can find comments to this article in{' '}
            <a
              aria-label="Twitter"
              href={`${SOCIAL_MEDIA_URLS.devto}/${blogPost.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue-500 hover:underline"
            >
              dev.to
            </a>
            )
          </p>
        </article>
      )}
    </>
  )
}

const getAllBlogs = async () => {
  const res = await fetch('https://dev.to/api/articles?username=tairosonloa')
  const data = await res.json()
  return data
}

export const getStaticPaths: GetStaticPaths = async () => {
  const devtoBlogPosts: DevtoBlogPost[] = await getAllBlogs()

  const paths = devtoBlogPosts.map((data) => ({
    params: { slug: data?.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const devtoBlogPosts: DevtoBlogPost[] = await getAllBlogs()

  const selectedBlog = devtoBlogPosts.filter((data) => data?.slug === params?.slug)

  const res = await fetch(`https://dev.to/api/articles/${selectedBlog[0]?.id}`)
  const blogPost = await res.json()

  if (!devtoBlogPosts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { blogPost },
    revalidate: 1,
  }
}

export default BlogPage
