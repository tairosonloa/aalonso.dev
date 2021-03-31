import React, { FC, useEffect, useState } from 'react'
import { ScrollUp } from '../components/Icons/Icons'

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <div
          aria-hidden="true"
          onClick={scrollToTop}
          className="fixed bottom-3 right-3 lg:bottom-5 lg:right-5 bg-gray-800 p-2 rounded cursor-pointer"
        >
          <ScrollUp />
        </div>
      )}
    </>
  )
}

export default ScrollToTop
