import React, { CSSProperties, FC, useState } from 'react'

type DimensionsProps = {
  margin?: number
  padding?: number
  backgroundColor?: string
  maxWidth?: number | string
  withGrid?: boolean
}

const leftLineStyles: CSSProperties = {
  height: 'calc(100% + 100px + 100px)',
  position: 'absolute',
  borderColor: 'var(--grey-300)',
  borderLeftWidth: 1,
  borderStyle: 'dashed',
  top: -100,
}
const rightLineStyles: CSSProperties = {
  height: 'calc(100% + 100px + 100px)',
  position: 'absolute',
  borderColor: 'var(--grey-300)',
  borderRightWidth: 1,
  borderStyle: 'dashed',
  top: -100,
  right: 0,
}
const topLineStyles: CSSProperties = {
  width: 'calc(100% + 100px + 100px)',
  position: 'absolute',
  borderColor: 'var(--grey-300)',
  borderTopWidth: 1,
  borderStyle: 'dashed',
  left: -100,
  top: 0,
}
const bottomLineStyles: CSSProperties = {
  width: 'calc(100% + 100px + 100px)',
  position: 'absolute',
  borderColor: 'var(--grey-300)',
  borderBottomWidth: 1,
  borderStyle: 'dashed',
  left: -100,
  bottom: 0,
}

export const Dimensions: FC<DimensionsProps> = ({
  children,
  margin = 32,
  padding = 0,
  backgroundColor = 'auto',
  maxWidth = 'auto',
  withGrid = false,
}) => {
  const [showGrid, setShowGrid] = useState(false)

  return (
    <>
      {withGrid && (
        <div>
          <input
            id="show-grid"
            name="show-grid"
            type="checkbox"
            checked={showGrid}
            onChange={() => setShowGrid(!showGrid)}
          />
          <label htmlFor="show-grid">Show grid</label>
        </div>
      )}
      <div
        style={{
          margin,
          padding,
          backgroundColor,
          maxWidth,
          position: 'relative',
        }}
      >
        {showGrid && (
          <>
            <div style={leftLineStyles} />
            <div style={rightLineStyles} />
            <div style={topLineStyles} />
            <div style={bottomLineStyles} />
          </>
        )}
        {children}
      </div>
    </>
  )
}

export const dimensionsDecorator = (options: DimensionsProps = {}) => (storyFn: Function) => (
  <Dimensions {...options}>{storyFn()}</Dimensions>
)
