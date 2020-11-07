import classNames from 'classnames'
import React, { FC } from 'react'
import { SiteMetadata } from '../../../site.metadata'
import mailtoLink from '../../utils/mailtoLink'
import { IconName, RemixIcon } from '../Icons/RemixIcon/RemixIcon'
import styles from './SocialMediaLinks.module.scss'

type SocialMediaLinksProps = {
  className?: string
}

export const SocialMediaLinks: FC<SocialMediaLinksProps> = ({ className }) => {
  const { socialMediaUrls } = SiteMetadata

  const allSocialMedia = [
    { href: socialMediaUrls.github, iconName: IconName.GITHUB, name: 'github' },
    { href: socialMediaUrls.linkedin, iconName: IconName.LINKEDIN, name: 'linkedin' },
    { href: socialMediaUrls.twitter, iconName: IconName.TWITTER, name: 'twitter' },
  ]

  const openMailtoLink = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault()
    window.open(mailtoLink(), '_blank', 'noopener noreferrer')
  }

  return (
    <ul className={classNames(styles.container, className)}>
      {allSocialMedia.map(({ href, iconName, name }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noopener noreferrer" data-testid={`${name}-link`}>
            <RemixIcon name={iconName} data-testid={name} />
            <span className={styles.hiddenTextForAccessibility}>{name}</span>
          </a>
        </li>
      ))}
      <li key="email">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          // eslint-disable-next-line no-script-url
          href="#"
          onClick={openMailtoLink}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="email-link"
        >
          <RemixIcon name={IconName.EMAIL} data-testid="email" />
          <span className={styles.hiddenTextForAccessibility}>email</span>
        </a>
      </li>
    </ul>
  )
}

export default SocialMediaLinks
