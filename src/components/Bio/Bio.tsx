import React, { FC } from 'react'
import { SiteMetadata } from '../../../site.metadata'
import { Icon, IconName } from '../Icon/Icon'
import { Text, TextType } from '../Text/Text'
import styles from './Bio.module.scss'

export const Bio: FC = () => {
  const { socialMediaUrls, employerInfo } = SiteMetadata

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text textType={TextType.TITLE}>About me</Text>
        <Text textType={TextType.TITLE_SMALL}>Let me introduce myself first.</Text>
      </div>
      <img src="/images/me.jpeg" alt="" className={styles.image} />
      <ul className={styles.socialMedia}>
        <li>
          <a
            href={socialMediaUrls.github}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="github-link"
          >
            <Icon name={IconName.GITHUB} data-testid="github" />
          </a>
        </li>
        <li>
          <a
            href={socialMediaUrls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="linkedin-link"
          >
            <Icon name={IconName.LINKEDIN} data-testid="linkedin" />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${socialMediaUrls.emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="email-link"
          >
            <Icon name={IconName.EMAIL} data-testid="email" />
          </a>
        </li>
      </ul>
      <Text className={styles.bio}>
        I&apos;m a full stack developer full-time working for{' '}
        <a href={employerInfo.website} target="_blank" rel="noopener noreferrer">
          {employerInfo.name}
        </a>
        , while studying for a Master&apos;s Degree in Computer Science and Engineering on weekends.
        Focused on TypeScript with NodeJS and React, I use these technologies both professionally
        and for personal side projects, like this website.
      </Text>
      <Text className={styles.bio}>
        I&apos;ve always been proactive, enthusiastic and curious, so I never stop learning and
        doing new stuff. I&apos;ve been playing with python for artificial intelligence and machine
        learning for a few years, specially around neural networks. Free software lover and DevOps
        soul, I&apos; consider myself an experienced Linux system administrator, so I self
        maintained my own virtual private server for years.
      </Text>
    </div>
  )
}
