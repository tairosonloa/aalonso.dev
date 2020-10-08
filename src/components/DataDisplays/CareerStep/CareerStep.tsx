import classNames from 'classnames'
import React, { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { Typography, TypographyType } from '../Typography/Typography'
import styles from './CareerStep.module.scss'

type CareerStepProps = {
  date: string
  title: string
  description: string
  stepIsOnTheLeft?: boolean
  className?: string
}

export const CareerStep: FC<CareerStepProps> = ({
  date,
  title,
  description,
  stepIsOnTheLeft = true,
  className,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const animation = classNames(
    'animate__animated',
    stepIsOnTheLeft ? ' animate__fadeInLeft' : ' animate__fadeInRight',
  )
  const position = stepIsOnTheLeft ? styles.left : styles.right

  return (
    <div
      className={classNames(
        styles.container,
        position,
        inView ? animation : styles.hidden,
        className,
      )}
      ref={ref}
    >
      <Typography typographyType={TypographyType.PARAGRAPH_LEAD}>{date}</Typography>
      <Typography typographyType={TypographyType.PARAGRAPH_LEAD}>{title}</Typography>
      <Typography innerHtml={description} />
    </div>
  )
}

export default CareerStep
