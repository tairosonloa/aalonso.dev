import React, { FC } from 'react'
import { Typography } from '../DataDisplays/Typography/Typography'

type CopyrightProps = {
  name?: string
  initialYear?: number
  className?: string
}

export const Copyright: FC<CopyrightProps> = ({
  name = 'Aitor Alonso',
  initialYear = 2020,
  className,
}) => {
  const currentYear = new Date().getFullYear()
  const copyrightYears = `${initialYear}${initialYear !== currentYear ? ` - ${currentYear}` : ''}`
  return (
    <Typography className={className}>
      Copyright &copy; {copyrightYears} {name}
    </Typography>
  )
}
