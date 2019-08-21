import React from 'react';
import get from 'lodash/get';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

export default function Failure(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const { state } = props.location;
  let previousPage;

  if(state) {
    if(state.prevPage) {
      previousPage = state.prevPage;
    }
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <main>
        <h1>Something went wrong...</h1>
        <p>
          Please try{' '}
          {previousPage ? <Link to={previousPage}>again.</Link> : 'again.'}<br />
          Or contact me by email:{' '}
          <a href={'mailto:studioo1533@gmail.com'}>
            studioo1533@gmail.com
          </a>
        </p>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query FailureSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;