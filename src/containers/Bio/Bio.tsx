import loadable from '@loadable/component'
import classNames from 'classnames'
import Image from 'next/image'
import React, { FC } from 'react'
import { SiteMetadata } from '../../../site.metadata'
import { Typography, TypographyType } from '../../components/DataDisplays/Typography/Typography'
import styles from './Bio.module.scss'

const Emoji = loadable(() => import('../../components/Emoji/Emoji'))
const SocialMediaLinks = loadable(
  () => import('../../components/SocialMediaLinks/SocialMediaLinks'),
)

export const Bio: FC = () => {
  const { employerInfo } = SiteMetadata

  return (
    <div className={styles.container}>
      <div className={styles.imageAndLinks}>
        <div className={styles.image}>
          <Image src="/images/me.webp" width={460} height={460} alt="" className={styles.image} />
        </div>
        <SocialMediaLinks className={styles.socialMediaLinks} />
      </div>
      <div>
        <Typography
          typographyType={TypographyType.TITLE_BIG}
          className={classNames(styles.bio, styles.bioTitle)}
        >
          Hi, I&apos;m Aitor <Emoji emoji="👋" label="waving hand" />
        </Typography>
        <Typography typographyType={TypographyType.PARAGRAPH_BIG} className={styles.bio}>
          I&apos;m a full-stack developer <Emoji emoji="👨‍💻" label="man with a computer" /> from
          Spain <Emoji emoji="🇪🇸" label="spain flag" />, full-time working for{' '}
          <a href={employerInfo.website} target="_blank" rel="noopener noreferrer">
            {employerInfo.name}
          </a>{' '}
          <Emoji emoji="🍋" label="lemon" />, while studying for a Master&apos;s Degree in Computer
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
