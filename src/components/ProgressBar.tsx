/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useRef } from 'react'

type ProgressBarProps = {
  enabled?: boolean
}

const ProgressBar: FC<ProgressBarProps> = ({ enabled = false }) => {
  const progressBar = useRef<HTMLDivElement>(null)

  const updateProgressBar = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    if (progressBar && progressBar.current) progressBar.current.style.width = scrolled + '%'
  }

  useEffect(() => {
    if (progressBar && progressBar.current) progressBar.current.style.width = '0'
    if (enabled && typeof window !== typeof undefined) {
      window.addEventListener('scroll', updateProgressBar)
      return () => window.removeEventListener('scroll', updateProgressBar)
    }
  })

  return (
    <div className="w-full h-0.5 bg-transparent">
      <div className="w-0 h-0.5 bg-white" ref={progressBar}></div>
    </div>
  )
}

export default ProgressBar
