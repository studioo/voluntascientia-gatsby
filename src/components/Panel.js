import React from 'react'

function Panel({ children, style = {} }) {
  return (
    <p
      style={{
        fontSize: '0.9em',
        border: '1px solid silver',
        borderRadius: '0.75em',
        padding: '0.75em',
        background: 'cornsilk',
        wordBreak: 'keep-all',
        ...style,
      }}
    >
      {children}
    </p>
  )
}

export default Panel
