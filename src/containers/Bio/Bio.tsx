import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { SiteMetadata } from '../../../site.metadata'
import { SectionContainer } from '../../components/DataDisplays/SectionContainer/SectionContainer'
import { SectionHeader } from '../../components/DataDisplays/SectionHeader/SectionHeader'
import { Typography } from '../../components/DataDisplays/Typography/Typography'
import { Emoji } from '../../components/Emoji/Emoji'
import { SocialMediaLinks } from '../../components/SocialMediaLinks/SocialMediaLinks'
import styles from './Bio.module.scss'

export const Bio: FC = () => {
  const { employerInfo } = SiteMetadata
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <SectionContainer sectionId="bio" darkBackground>
      <SectionHeader title="About me" subtitle="Let me introduce myself first." />
      <div ref={ref} className={inView ? 'animate__animated animate__fadeInUp' : styles.hidden}>
        <img src="/images/me.jpeg" alt="" className={styles.image} />
        <SocialMediaLinks className={styles.socialMediaLinks} />
        <Typography className={styles.bio}>
          I&apos;m a full-stack developer <Emoji emoji="👨‍💻" label="man with a computer" /> full-time
          working for{' '}
          <a href={employerInfo.website} target="_blank" rel="noopener noreferrer">
            {employerInfo.name}
          </a>{' '}
          <Emoji emoji="🍋" label="lemon" />, while studying for a Master&apos;s Degree in Computer
          Science and Engineering <Emoji emoji="🎓" label="graduation cap" /> on weekends. Focused
          on TypeScript with Node.js and React <Emoji emoji="⚛️" label="atom" />, I mainly work with{' '}
          <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer">
            NestJS
          </a>{' '}
          for backend APIs and{' '}
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>{' '}
          for websites.
        </Typography>
        <Typography className={styles.bio}>
          I&apos;m proactive, enthusiastic and curious , so I never stop learning and doing new
          stuff. I&apos;ve been playing around artificial intelligence and machine learning with
          python for a few years, specially around neural networks.
        </Typography>
        <Typography className={styles.bio}>
          Free software contributor <Emoji emoji="❤️" label="hearth" />, Linux fan{' '}
          <Emoji emoji="🐧" label="penguin" /> and DevOps soul <Emoji emoji="⚙️" label="gear" />
          . <br />
          Swipe down to know my history! <Emoji emoji="👇" label="swipe down" />
        </Typography>
      </div>
    </SectionContainer>
  )
}
