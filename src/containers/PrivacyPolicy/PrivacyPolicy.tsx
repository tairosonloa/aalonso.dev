import React, { FC } from 'react'
import { SiteMetadata } from '../../../site.metadata'
import { Typography, TypographyType } from '../../components/DataDisplays/Typography/Typography'
import styles from './PrivacyPolicy.module.scss'

export const PrivacyPolicy: FC = () => {
  const { socialMediaUrls } = SiteMetadata

  return (
    <div className={styles.container}>
      <Typography typographyType={TypographyType.TITLE_BIG} className={styles.title}>
        Privacy Policy
      </Typography>
      <Typography
        typographyType={TypographyType.PARAGRAPH_LEAD}
        className={styles.lastModifiedDate}
      >
        Effective date: June 22, 2020
      </Typography>
      <Typography>
        I take your privacy seriously. To better protect your privacy I provide this privacy policy
        notice explaining the way your personal information is collected and used. By using this
        website, you agree to the collection and use of information in accordance with this policy.
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Information Collection And Use
      </Typography>
      <Typography typographyType={TypographyType.PARAGRAPH_LEAD} className={styles.title}>
        Personal Data
      </Typography>
      <Typography>
        I (Aitor Alonso Núñez) am the Responsible for the user&apos;s personal data treatment and
        informs that this data will be handled according to the disposed in the current personal
        data protection regulations, the 2016/679 UE Regulation of 27 April 2016 (GDPR) related to
        the protection of natural persons regarding personal data treatment and the free circulation
        of this data, and the 3/2018 Organic Law of 5 December, about personal data protection and
        digital rights guarantee (LOPDGDD)
      </Typography>
      <Typography>
        While using my website, I may ask you to provide me with certain personally identifiable
        information that can be used to contact or identify you (&quot;Personal Data&quot;).
        Personally identifiable information may include, but is not limited to:
      </Typography>
      <Typography htmlTag="div">
        <ul>
          <li>Email address</li>
          <li>Cookies</li>
          <li>Usage Data</li>
        </ul>
      </Typography>
      <Typography>
        I may also collect information how the website is accessed and used (&quot;Usage
        Data&quot;). This Usage Data may include information such as your computer&apos;s Internet
        Protocol address (e.g. IP address), browser type, browser version, the pages of my website
        that you visit, the time and date of your visit, the time spent on those pages, unique
        device identifiers and other diagnostic data.
      </Typography>
      <Typography typographyType={TypographyType.PARAGRAPH_LEAD} className={styles.title}>
        Tracking & Cookies Data
      </Typography>
      <Typography>
        I use cookies and similar tracking technologies to track the activity on my website and hold
        certain information.
      </Typography>
      <Typography>
        Cookies are files with small amount of data which may include an anonymous unique
        identifier. Cookies are sent to your browser from a website and stored on your device.
        Tracking technologies also used are beacons, tags, and scripts to collect and track
        information and to improve and analyze my website.
      </Typography>
      <Typography>
        You can instruct your browser to refuse all cookies or to indicate when a cookie is being
        sent. However, if you do not accept cookies, you may not be able to use some portions of my
        website.
      </Typography>
      <Typography>
        <strong>Examples of Cookies I use:</strong>
      </Typography>
      <Typography htmlTag="div">
        <ul>
          <li>
            Preference Cookies. I use Preference Cookies to remember your preferences and various
            settings.
          </li>
          <li>Analytics Cookies. I use Analytics Cookies to improve the website performance.</li>
          <li>Security Cookies. I use Security Cookies for security purposes.</li>
        </ul>
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        User rights
      </Typography>
      <Typography>
        Consent can be withdrawn at any time. You have the right to access, request correction or
        erasure of your personal information, as well as the limitation or opposition of its
        treatment. You can exercise your rights by sending me an email to{' '}
        <a
          href={`mailto:${socialMediaUrls.emailAddress}?subject=aalonso.dev Privacy`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {socialMediaUrls.emailAddress}
        </a>
        .
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Use of Data
      </Typography>
      <Typography>I use the collected data for various purposes:</Typography>
      <Typography htmlTag="div">
        <ul>
          <li>To provide and maintain the website.</li>
          <li>To notify you about changes to my website.</li>
          <li>
            To allow you to participate in interactive features of my website when you choose to do
            so.
          </li>
          <li>To provide analysis or valuable information so that I can improve the website.</li>
          <li>
            To monitor the usage of the website to detect, prevent and address technical issues.
          </li>
        </ul>
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Transfer of Data
      </Typography>
      <Typography>
        Your information, including Personal Data, may be transferred to — and maintained on —
        computers located outside of your state, province, country or other governmental
        jurisdiction where the data protection laws may differ than those from your jurisdiction.
      </Typography>
      <Typography>
        If you are located outside Spain and choose to provide information to me, please note that I
        transfer the data, including Personal Data, to Spain and process it there.
      </Typography>
      <Typography>
        Your consent to this Privacy Policy followed by your submission of such information
        represents your agreement to that transfer.
      </Typography>
      <Typography>
        I will take all steps reasonably necessary to ensure that your data is treated securely and
        in accordance with this Privacy Policy and no transfer of your Personal Data will take place
        to an organization or a country unless there are adequate controls in place including the
        security of your data and other personal information.
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Legal Warning
      </Typography>
      <Typography>
        I reserve the right to modify, at any time and without prior notice, the configuration and
        contents of this website. The information on this website is provided without warranty of
        any kind, either expressed or implied, and may be changed or updated without prior notice.
        The user compromises not to undertake in any conduct that could damage the interests and
        rights of me or third parties. All the information received by me through this website will
        not be considered confidential, except for the one included in the data confidentiality
        section.
      </Typography>
      <Typography>
        I do not assume any responsibility derived from the contents that third parties have
        included in the hyperlinks showcased in this page. The establishment of the hyperlink does
        not imply in any case the existence of a relationship between me and the owner of the
        website in which it is established, neither the acceptance and approval from me of its
        contents nor services offered there in public disposition.
      </Typography>
      <Typography>
        It is expressly forbidden any alteration, change, modification or adaptation of this website
        or any information that it contains.
      </Typography>
      <Typography>
        I am not liable for any loss or damage arising from access to its website or the use of
        information or applications contained therein. Likewise, it is not responsible, neither
        guarantees the availability and continuity in access to this website nor that it is free of
        errors. The user will be liable for damages and losses of any nature that I may suffer as a
        result of the breach of any of the obligations to which it is subject by these conditions.
      </Typography>
      <Typography>
        Any change in my policy will be communicated to you promptly and updates will be published
        on my website.
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Legal Requirements
      </Typography>
      <Typography>
        I may disclose your Personal Data in the good faith belief that such action is necessary to:
      </Typography>
      <Typography htmlTag="div">
        <ul>
          <li>
            To comply with a legal obligation to protect and defend the rights or property of me.
          </li>
          <li>To prevent or investigate possible wrongdoing in connection with the website.</li>
          <li>To protect the personal safety of users of the website or the public.</li>
          <li>To protect against legal liability.</li>
        </ul>
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Security Of Data
      </Typography>
      <Typography>
        The security of your data is important to me, but remember that no method of transmission
        over the Internet, or method of electronic storage is 100% secure. While I strive to use
        commercially acceptable means to protect your Personal Data, I cannot guarantee its absolute
        security.
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Service Providers
      </Typography>
      <Typography>
        I may employ third party companies and individuals to facilitate my website (&quot;website
        Providers&quot;), to provide the website on my behalf, to perform website-related services
        or to assist me in analyzing how my website is used.
      </Typography>
      <Typography>
        These third parties have access to your Personal Data only to perform these tasks on my
        behalf and are obligated not to disclose or use it for any other purpose. Please note that
        these providers may transfer the data, including Personal Data, to external countries where
        their server are located.
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Analytics
      </Typography>
      <Typography>
        I may use third-party website Providers to monitor and analyze the use of my website.
      </Typography>
      <Typography>
        <strong>Google Analytics</strong> - Google Analytics is a web traffic analysis tool. You can
        read the Privacy Policy for Statcounter here:{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          https://policies.google.com/privacy
        </a>
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Links to Other Sites
      </Typography>
      <Typography>
        My website may contain links to other sites that are not operated by me. If you click on a
        third party link, you will be directed to that third party&apos;s site. I strongly advise
        you to review the Privacy Policy of every site you visit.
      </Typography>
      <Typography>
        I have no control over and assume no responsibility for the content, privacy policies or
        practices of any third party sites or services.
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Children&apos;s Privacy
      </Typography>
      <Typography>
        My website does not address anyone under the age of 18 (&quot;Children&quot;).
      </Typography>
      <Typography>
        I do not knowingly collect personally identifiable information from anyone under the age of
        18. If you are a parent or guardian and you are aware that your Children has provided me
        with Personal Data, please contact me. If I become aware that I have collected Personal Data
        from children without verification of parental consent, I take steps to remove that
        information from my servers.
      </Typography>

      <Typography typographyType={TypographyType.TITLE} className={styles.title}>
        Changes to This Privacy Policy
      </Typography>
      <Typography>
        I may update my Privacy Policy from time to time. I will notify you of any changes by
        posting the new Privacy Policy on this page.
      </Typography>
      <Typography>
        I will let you know via email and/or a prominent notice on my website, prior to the change
        becoming effective and update the &quot;effective date&quot; at the top of this Privacy
        Policy.
      </Typography>
      <Typography>
        You are advised to review this Privacy Policy periodically for any changes. Changes to this
        Privacy Policy are effective when they are posted on this page.
      </Typography>
    </div>
  )
}
