import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'

export default function NotFoundPage(props) {
  return (
    <Layout location={props.location}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
