import React from 'react';
import get from 'lodash/get';
import { graphql } from 'gatsby';

import Form from '../components/Form';
import Layout from '../components/Layout';

export default function Unsubscribe(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`

  return (
    <Layout location={props.location} title={siteTitle}>
      <main>
        <div
          style={{
            margin: '80px 0 40px 0',
            fontFamily: systemFont,
          }}
        >
          <Form
            method={'delete'}
            buttonTitle={'Unsubscribe'}
            title={'Unsubscribe from Newsletter'}
            description={'If you change your mind, sign up again.'}
            info={`You can send a feedback.<br /><a href="mailto:studioo1533@gmail.com">studioo1533@gmail.com</a>`}
            endpoint={'https://p5psezx8c9.execute-api.eu-west-1.amazonaws.com/prod/unsubscribe'}
          />
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query UnsubscribeSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;