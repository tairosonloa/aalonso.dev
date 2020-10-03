import classNames from 'classnames'
import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { SectionContainer } from '../../components/DataDisplays/SectionContainer/SectionContainer'
import { SectionHeader } from '../../components/DataDisplays/SectionHeader/SectionHeader'
import { Typography, TypographyType } from '../../components/DataDisplays/Typography/Typography'
import { DevIcon, DevIconName } from '../../components/Icons/DevIcon/DevIcon'
import { IconName, RemixIcon } from '../../components/Icons/RemixIcon/RemixIcon'
import styles from './Skills.module.scss'

const techSkills = [
  { icon: DevIconName.REACT, name: 'React' },
  { icon: DevIconName.NODE_JS, name: 'Node.js' },
  { icon: DevIconName.TYPESCRIPT, name: 'TypeScript' },
  { icon: DevIconName.HTML, name: 'HTML 5' },
  { icon: DevIconName.CSS, name: 'CSS 3' },
  { icon: DevIconName.PYTHON, name: 'Python 3' },
  { icon: DevIconName.POSTGRESQL, name: 'PostgreSQL' },
  { icon: DevIconName.MONGODB, name: 'MongoDB' },
  { icon: DevIconName.LINUX, name: 'Linux' },
  { icon: DevIconName.DOCKER, name: 'Docker' },
  { icon: DevIconName.AWS, name: 'Amazon AWS' },
]

const softSkills = [
  { icon: IconName.TEAM_WORK, name: 'Teamwork' },
  { icon: IconName.COMMUNICATION, name: 'Communication' },
  { icon: IconName.EMPATHY, name: 'Empathy' },
  { icon: IconName.CURIOSITY, name: 'Curiosity' },
  { icon: IconName.TIME_MANAGEMENT, name: 'Time management' },
  { icon: IconName.PROBLEM_SOLVING, name: 'Problem solving' },
  { icon: IconName.ACCOUNTABILITY, name: 'Accountability' },
  { icon: IconName.OPEN_MINDEDNESS, name: 'Open-mindedness' },
  { icon: IconName.CREATIVITY, name: 'Creativity' },
  { icon: IconName.ADAPTABILITY, name: 'Adaptability' },
  { icon: IconName.PROACTIVITY, name: 'Proactivity' },
]

export const Skills: FC = () => {
  const [refTech, inViewTech] = useInView({ triggerOnce: true })
  const [refSoft, inViewSoft] = useInView({ triggerOnce: true })

  return (
    <SectionContainer sectionId="skills">
      <SectionHeader title="What I offer" subtitle="What people get when work with me." />
      <div className={styles.skillsContainer}>
        <div
          data-testid="tech-skills"
          ref={refTech}
          className={classNames(
            inViewTech ? 'animate__animated animate__fadeInLeft' : styles.hidden,
          )}
        >
          <RemixIcon name={IconName.TECH_SKILLS} className={styles.headIcon} />
          <Typography
            typographyType={TypographyType.PARAGRAPH_LEAD}
            className={styles.skillHeaderText}
          >
            Tech Skills
          </Typography>
          <div className={styles.skillsLogos}>
            {techSkills.map((skill) => (
              <div className={styles.iconWithDescription} key={skill.name}>
                <DevIcon name={skill.icon} className={styles.skillIcon} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          data-testid="soft-skills"
          ref={refSoft}
          className={classNames(
            inViewSoft ? 'animate__animated animate__fadeInRight' : styles.hidden,
          )}
        >
          <RemixIcon name={IconName.SOFT_SKILLS} className={styles.headIcon} />
          <Typography
            typographyType={TypographyType.PARAGRAPH_LEAD}
            className={styles.skillHeaderText}
          >
            Soft Skills
          </Typography>
          <div className={styles.skillsLogos}>
            {softSkills.map((skill) => (
              <div className={styles.iconWithDescription} key={skill.name}>
                <RemixIcon name={skill.icon} className={styles.skillIcon} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
