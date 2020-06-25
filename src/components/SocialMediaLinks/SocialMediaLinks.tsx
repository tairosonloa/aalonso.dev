import classNames from 'classnames'
import React, { FC } from 'react'
import { SiteMetadata } from '../../../site.metadata'
import { IconName, RemixIcon } from '../Icons/RemixIcon/RemixIcon'
import styles from './SocialMediaLinks.module.scss'

type SocialMediaLinksProps = {
  className?: string
}

export const SocialMediaLinks: FC<SocialMediaLinksProps> = ({ className }) => {
  const { socialMediaUrls } = SiteMetadata

  const allSocialMedia = [
    { href: socialMediaUrls.github, iconName: IconName.GITHUB, dataTestId: 'github' },
    { href: socialMediaUrls.linkedin, iconName: IconName.LINKEDIN, dataTestId: 'linkedin' },
    {
      href: `mailto:${socialMediaUrls.emailAddress}`,
      iconName: IconName.EMAIL,
      dataTestId: 'email',
    },
  ]

  return (
    <ul className={classNames(styles.container, className)}>
      {allSocialMedia.map(({ href, iconName, dataTestId }) => (
        <li key={dataTestId}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`${dataTestId}-link`}
          >
            <RemixIcon name={iconName} data-testid={dataTestId} />
          </a>
        </li>
      ))}
    </ul>
  )
}
