import { format, parseISO } from 'date-fns'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import sanitize from 'sanitize-html'
import Emoji from '../../components/Emoji'
import { BlogPost } from '../../containers/types/types'

export type BlogPageProps = {
  hopeBlog: BlogPost
}

const BlogPage: NextPage<BlogPageProps> = ({ hopeBlog }) => {
  const router = useRouter()

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
      {hopeBlog && (
        <article
          className="text-gray-300 sm:px-4 py-16 pt-20 md:pt-28"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="w-full mx-auto mb-8 text-left sm:w-11/12 md:w-3/4 lg:w-1/2">
            <img
              src={hopeBlog.cover_image}
              className="object-fit h-auto md:object-cover w-full md:max-h-64 bg-center rounded-lg"
              alt="Blog Cover"
            />
            <h1
              className="px-4 sm:px-0 mt-6 mb-6 text-3xl font-bold leading-tight text-white md:text-4xl"
              itemProp="headline"
              title={hopeBlog.title}
            >
              {hopeBlog.title}
            </h1>

            <div className="flex justify-between px-4 sm:px-0">
              <div className="flex items-center ">
                <div className="avatar ">
                  <img
                    className="rounded-full w-14 h-14"
                    src={hopeBlog.user.profile_image_90}
                    alt={hopeBlog.user.name}
                  />
                </div>
                <div className="ml-2">
                  <p className=" font-semibold "> {hopeBlog.user.name}</p>
                  <p className="text-sm text-gray-400">
                    {format(parseISO(hopeBlog.published_at), 'MMMM dd, yyyy')}
                  </p>
                </div>
              </div>
              <div className="self-center">
                <p className="text-sm flex justify-end text-gray-400">
                  {hopeBlog.public_reactions_count}&nbsp;
                  <Emoji emoji="❤️" label="likes" />
                </p>
              </div>
            </div>
          </div>
          <div
            className="px-4 sm:px-0 text-gray-300 w-full mx-auto prose md:prose 2xl:prose-lg md:w-3/4 lg:w-1/2"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: sanitize(hopeBlog.body_html) }}
          />
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
  const devData: BlogPost[] = await getAllBlogs()

  const paths = devData.map((data) => ({
    params: { slug: data?.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const devData: BlogPost[] = await getAllBlogs()

  const selectedBlog = devData.filter((data) => data?.slug === params?.slug)

  // const blogObj = selectedBlog[0]

  const res = await fetch(`https://dev.to/api/articles/${selectedBlog[0]?.id}`)
  const blogObj = await res.json()

  // const remarkContent = await markdownToHtml(blogObj.body_markdown)

  if (!devData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      // remarkContent,
      hopeBlog: blogObj,
    }, // will be passed to the page component as props
    revalidate: 1,
  }
}

export default BlogPage
