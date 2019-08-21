import React from 'react'

import { rhythm } from '../utils/typography'
import voluntaimage from '../assets/gatsby-icon.png'

export default function Bio() {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <img
        src={voluntaimage}
        alt={'Voluntascientia blog'}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: 50,
          height: 50,
          borderRadius: `100%`,
        }}
      />
      <p>
        This blog is about things I'm interested in.<br />{' '}
        <a href="https://github.com/studioo/voluntascientia-gatsby" target="__blank">
          Voluntascientia on Github
        </a>
      </p>
    </div>
  )
}
