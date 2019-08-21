import React from 'react';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

export default function Confirm(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <Layout location={props.location} title={siteTitle}>
      <main>
        <h1>Just one more thing...</h1>
        <p>
          Thank you for subscribing. You will need to check your inbox and
          confirm your subscription.
        </p>
        <Link to={'/'}>Go to home page.</Link>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ConfirmSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;