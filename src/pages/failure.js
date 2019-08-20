import React, { Component } from 'react';
import Layout from '../components/Layout';
import get from 'lodash/get';
import { graphql } from 'gatsby';

class Failure extends Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <main>
          <h1>Something went wrong...</h1>
          <p>
            Please try subscribing again.<br />
            Or contact me by email:{' '}
            <a href={'mailto:studioo1533@gmail.com'}>
              studioo1533@gmail.com
            </a>
          </p>
        </main>
      </Layout>
    );
  }
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

export default Failure;
