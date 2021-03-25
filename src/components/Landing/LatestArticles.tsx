/* eslint-disable jsx-a11y/anchor-is-valid */
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import { Props } from '../../containers/Interfaces/Interface'
import { Emoji } from '../Emoji'
import { ClickArrow } from '../Icons/Icons'

const LatestArticles: React.FC<Props> = ({ devData }) => {
  return (
    <section>
      <div className="text-left ">
        <h2 className="text-3xl md:text-4xl font-bold ">Latest Articles</h2>
      </div>
      <div className="flex flex-col">
        {devData &&
          devData.slice(0, 3).map(({ description, title, slug, positive_reactions_count, published_at }) => (
            <Link key={slug} href={`/blog/${slug}`}>
              <a className="p-4 cursor-pointer border border-gray-600 hover:border-gray-400 transition rounded-lg mt-5">
                <div className="flex justify-between">
                  <h3 className=" mb-1 text-xl  font-semibold tracking-normal">{title}</h3>
                </div>
                <div className="flex justify-between mb-1">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-gray-400 prose text-sm  leading-6 ">
                      <time>{format(parseISO(published_at), 'MMMM dd, yyyy')} </time>
                    </dd>
                  </dl>
                  <span className="text-gray-400 text-sm flex">
                    {positive_reactions_count}&nbsp;
                    <Emoji emoji="❤️" label="likes" />
                  </span>
                </div>

                <div className="text-sm md:text-base font-normal text-gray-300">{description}</div>
              </a>
            </Link>
          ))}
      </div>
      <Link href="/blog">
        <a className=" flex justify-center p-3 text-gray-300">
          <div className="text-center text-sm md:text-base cursor-pointer">More Articles</div>
          <ClickArrow />
        </a>
      </Link>
    </section>
  )
}

export default LatestArticles
