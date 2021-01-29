import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { Typography, TypographyType } from '../../components/DataDisplays/Typography/Typography'
import { Emoji } from '../../components/Emoji/Emoji'
import { SocialMediaLinks } from '../../components/SocialMediaLinks/SocialMediaLinks'
import styles from './Bio.module.scss'

export const Bio: FC = () => {
  const { employerInfo } = useStaticQuery(query).site.siteMetadata

  return (
    <div className={styles.container}>
      <div className={styles.imageAndLinks}>
        <picture>
          <source srcSet="/images/me.webp" type="image/webp" />
          <img src="/images/me.png" alt="" width={460} height={460} className={styles.image} />
        </picture>
        <SocialMediaLinks className={styles.socialMediaLinks} />
      </div>
      <div>
        <Typography typographyType={TypographyType.TITLE_BIG} className={styles.bio}>
          Hi, I&apos;m Aitor <Emoji emoji="👋" label="waving hand" />
        </Typography>
        <Typography typographyType={TypographyType.PARAGRAPH_BIG} className={styles.bio}>
          I&apos;m a full-stack developer <Emoji emoji="👨‍💻" label="man with a computer" /> from
          Spain, currently full-time working for{' '}
          <a href={employerInfo.website} target="_blank" rel="noopener noreferrer">
            {employerInfo.name}
          </a>{' '}
          <Emoji emoji="🍋" label="lemon" /> while studying for a Master&apos;s Degree in Computer
          Science and Engineering <Emoji emoji="🎓" label="graduation cap" /> on weekends.
        </Typography>
        <Typography typographyType={TypographyType.PARAGRAPH_BIG} className={styles.bio}>
          Free software contributor <Emoji emoji="❤️" label="hearth" />, Linux fan{' '}
          <Emoji emoji="🐧" label="penguin" /> and DevOps <Emoji emoji="⚙️" label="gear" /> soul.
        </Typography>
      </div>
    </div>
  )
}

const query = graphql`
  query EmployerInfo {
    site {
      siteMetadata {
        employerInfo {
          name
          website
        }
      }
    }
  }
`
