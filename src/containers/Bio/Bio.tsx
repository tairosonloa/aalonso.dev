import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { SiteMetadata } from '../../../site.metadata'
import { SectionContainer } from '../../components/DataDisplays/SectionContainer/SectionContainer'
import { SectionHeader } from '../../components/DataDisplays/SectionHeader/SectionHeader'
import { Typography } from '../../components/DataDisplays/Typography/Typography'
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
          I&apos;m a full-stack developer{' '}
          <span role="img" aria-label="man with a computer">
            👨‍💻
          </span>{' '}
          full-time working for{' '}
          <a href={employerInfo.website} target="_blank" rel="noopener noreferrer">
            {employerInfo.name}
          </a>{' '}
          <span role="img" aria-label="lemon">
            🍋
          </span>
          , while studying for a Master&apos;s Degree in Computer Science and Engineering{' '}
          <span role="img" aria-label="graduation cap">
            🎓
          </span>{' '}
          on weekends. Focused on TypeScript with Node.js and React{' '}
          <span role="img" aria-label="atom">
            ⚛️
          </span>
          , I mainly work with{' '}
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
          Free software contributor{' '}
          <span role="img" aria-label="hearth">
            ❤️
          </span>
          , Linux fan{' '}
          <span role="img" aria-label="penguin">
            🐧
          </span>{' '}
          and DevOps soul{' '}
          <span role="img" aria-label="gear">
            ⚙️
          </span>{' '}
          . <br />
          Swipe down to know my history!{' '}
          <span role="img" aria-label="swipe down">
            👇
          </span>
        </Typography>
      </div>
    </SectionContainer>
  )
}
