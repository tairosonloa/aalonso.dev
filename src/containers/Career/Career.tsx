import loadable from '@loadable/component'
import React, { FC } from 'react'
import { SectionContainer } from '../../components/DataDisplays/SectionContainer/SectionContainer'
import { SectionHeader } from '../../components/DataDisplays/SectionHeader/SectionHeader'
import styles from './Career.module.scss'

const CareerStep = loadable(() => import('../../components/DataDisplays/CareerStep/CareerStep'))

const career = [
  {
    imageUrl: '/images/acidtango.jpeg',
    date: '2019 - today',
    title: 'Full-Stack Developer',
    description:
      'Joined <a href="https://acidtango.com/" target="_blank" rel="noopener noreferrer">Acid Tango</a> to work as a full-stack Developer with Node.js and React. My stack is mainly TypeScript, using Next.js for the frontend and NestJS for the backend.',
  },
  {
    imageUrl: '/images/uc3m.png',
    date: '2019 - 2022 (expected)',
    title: "Master's Degree in Computer Science and Engineering",
    description:
      "Part-time studing a Master's Degree in Computer Science and Engineering at Universidad Carlos III de Madrid, while working full-time.",
  },
  {
    imageUrl: '/images/uc3m.png',
    date: '2017 - 2019',
    title: 'DevOps Developer Intern',
    description:
      'Working as intern in the Computer Science and Engineering Department at my university. DevOps tasks, including full-stack development and setting infrastructure.',
  },
  {
    imageUrl: '/images/techfest.png',
    date: '2016 - 2020',
    title: 'T3chfest Collaborator and Volunteer',
    description:
      'Helping making <a href="https://t3chfest.es/" target="_blank" rel="noopener noreferrer">T3chFest</a> possible for four years. Working near the organizers and friends to position T3chFest as a reference IT event.',
  },
  {
    imageUrl: '/images/uc3m.png',
    date: '2015 - 2019',
    title: "Bachelor's Degree in Computer Science and Engineering",
    description:
      "Got my Bachelor's Degree in Computer Science and Engineering at Universidad Carlos III de Madrid with honors. Specialized in artificial intelligence and data analysis.",
  },
]

export const Career: FC = () => {
  return (
    <SectionContainer sectionId="career" darkBackground>
      <SectionHeader title="Career" subtitle="My journey so far." />
      <ul className={styles.career}>
        {career.map((step, index) => (
          <li className={styles.step} key={step.title}>
            <img src={step.imageUrl} alt="" className={styles.stepImage} />
            <CareerStep
              date={step.date}
              title={step.title}
              description={step.description}
              stepIsOnTheLeft={index % 2 === 0}
            />
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}
