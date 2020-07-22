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
          I&apos;m a full stack developer full-time working for{' '}
          <a href={employerInfo.website} target="_blank" rel="noopener noreferrer">
            {employerInfo.name}
          </a>
          , while studying for a Master&apos;s Degree in Computer Science and Engineering on
          weekends. Focused on TypeScript with Node.js and React, I use these technologies both
          professionally and for personal side projects, like this website.
        </Typography>
        <Typography className={styles.bio}>
          I&apos;m proactive, enthusiastic and curious, so I never stop learning and doing new
          stuff. I&apos;ve been playing with python for artificial intelligence and machine learning
          for a few years, specially around neural networks. Free software lover and DevOps soul,
          I&apos;ll consider myself an experienced Linux system administrator, so I self maintained
          my own virtual private server for years.
        </Typography>
      </div>
    </SectionContainer>
  )
}
