import classNames from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { IconName, RemixIcon } from '../Icons/RemixIcon/RemixIcon'
import styles from './SocialMediaLinks.module.scss'

type SocialMediaLinksProps = {
  className?: string
}

export const SocialMediaLinks: FC<SocialMediaLinksProps> = ({ className }) => {
  const { socialMediaUrls } = useStaticQuery(query).site.siteMetadata

  const allSocialMedia = [
    { href: socialMediaUrls.github, iconName: IconName.GITHUB, name: 'github' },
    { href: socialMediaUrls.linkedin, iconName: IconName.LINKEDIN, name: 'linkedin' },
    { href: socialMediaUrls.twitter, iconName: IconName.TWITTER, name: 'twitter' },
  ]

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
    </ul>
  )
}

export default SocialMediaLinks

const query = graphql`
  query SocialMediaUrls {
    site {
      siteMetadata {
        socialMediaUrls {
          github
          linkedin
          twitter
        }
      }
    }
  }
`
