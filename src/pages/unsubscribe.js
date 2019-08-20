import React from 'react';
import Layout from '../components/Layout';
import get from 'lodash/get';
import axios from 'axios';
import { graphql } from 'gatsby';

// TODO: refactor component
class Unsubscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async onSubmit(event) {
    event.preventDefault()
    const URL = 'https://iz81y6vlzk.execute-api.eu-west-1.amazonaws.com/dev/unsubscribe?email=studioo@mail.ru'

    try {
      const email = JSON.stringify({ email: this.state.email }, null)
      const response = await axios.delete(URL, email)
      console.log(response)
      this.setState({ email: '' })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <main>
          <h1>Unsubscribe form</h1>
          <form
            method="delete"
            onSubmit={this.onSubmit}
          >
            <input
              className="formkit-input"
              name="email"
              aria-label="Your email address"
              placeholder="Your email address"
              value={this.state.email}
              onChange={this.handleChange}
              required={true}
              type="email"
            />
            <button>unsubscribe</button>
          </form>
        </main>
      </Layout>
    );
  }
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

export default Unsubscribe;
