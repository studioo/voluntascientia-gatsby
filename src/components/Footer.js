import React from 'react'

import { rhythm } from '../utils/typography'

export default function Footer(props) {
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
      }}
    >
      <div style={{ float: 'right' }}>
        <a
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
        >rss</a>
      </div>
      <a
        href="https://github.com/studioo"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
    </footer>
  )
}