import React, { FC } from 'react'
import { DevIcon, DevIconName } from '../DevIcon/DevIcon'
import { Icon, IconName } from '../Icon/Icon'
import { Text, TextType } from '../Text/Text'
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
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text textType={TextType.TITLE}>What I offer</Text>
        <Text textType={TextType.TITLE_SMALL}>Why you might want to work with me.</Text>
      </div>
      <div className={styles.skillsContainer}>
        <div data-testid="tech-skills">
          <Icon name={IconName.TECH_SKILLS} className={styles.headIcon} />
          <Text textType={TextType.PARAGRAPH_LEAD} className={styles.skillHeaderText}>
            Tech Skills
          </Text>
          <div className={styles.skillsLogos}>
            {techSkills.map((skill) => (
              <div className={styles.iconWithDescription} key={skill.name}>
                <DevIcon name={skill.icon} className={styles.skillIcon} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div data-testid="soft-skills">
          <Icon name={IconName.SOFT_SKILLS} className={styles.headIcon} />
          <Text textType={TextType.PARAGRAPH_LEAD} className={styles.skillHeaderText}>
            Soft Skills
          </Text>
          <div className={styles.skillsLogos}>
            {softSkills.map((skill) => (
              <div className={styles.iconWithDescription} key={skill.name}>
                <Icon name={skill.icon} className={styles.skillIcon} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
