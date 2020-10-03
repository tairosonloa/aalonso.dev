import { DependencyList, useEffect, useRef } from 'react'

// Custom TypeScript version of the hook useScrollPosition from:
// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

const isBrowser = typeof window !== `undefined`

type ScrollPosition = {
  x: number
  y: number
}

type ScrollCallback = ({
  previousPosition,
  currentPosition,
}: {
  previousPosition: ScrollPosition
  currentPosition: ScrollPosition
}) => void | undefined

function getScrollPosition({
  element,
  useWindow = true,
}: {
  element?: React.RefObject<HTMLElement>
  useWindow?: boolean
}): ScrollPosition {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element?.current ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

/**
 * useScrollPosition is a custom React hook to get a listener of scroll position.
 * @param effect The hook callback function to be called every scroll change event.
 * @param deps The dependencies array that, on changes,  will fire DOM renders.
 * @param element The element ref obtained by React.useRef(), if only want to listen for an element scroll, not the entire document.
 * @param useWindow A boolean value that determines if scroll is got using window.scroll (true) or target.getBoundingClientRect() (false).
 * @param waitMiliseconds Minimum time between hooks calls, to better performance.
 */
export function useScrollPosition(
  effect: ScrollCallback,
  deps?: DependencyList,
  element?: React.RefObject<HTMLElement>,
  useWindow = true,
  waitMiliseconds?: number,
): void {
  const position = useRef<ScrollPosition>(getScrollPosition({ useWindow }))

  let throttleTimeout: NodeJS.Timeout = (null as unknown) as NodeJS.Timeout

  const callBack = () => {
    const currentPosition = getScrollPosition({ element, useWindow })
    effect({ previousPosition: position.current, currentPosition })
    position.current = currentPosition
    throttleTimeout = (null as unknown) as NodeJS.Timeout
  }

  useEffect(() => {
    const handleScroll = () => {
      if (waitMiliseconds) {
        if (throttleTimeout === null) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          throttleTimeout = setTimeout(callBack, waitMiliseconds)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}
