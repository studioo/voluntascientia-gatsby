import React, { Component } from 'react'
import { navigate } from 'gatsby';
import axios from 'axios';

import './style.css'


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      attempts: 0
    }

    this.input = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async onSubmit(event) {
    event.preventDefault();

    try {
      const email = JSON.stringify({
        email: this.state.email
      }, null)

      const response = await axios({
        method: this.props.method,
        url: this.props.endpoint,
        data: email
      })

      this.setState({ email: '' }) // Clear input
      navigate('/confirm/') // Redirect
    } catch (error) {
      console.log(error)

      if (this.state.attempts >= 2) {
        navigate('/failure/', {
          state: {
            prevPage: location.pathname
          }
        })
      }

      this.input.current.style.border = '1px solid red';
      this.setState({ attempts: this.state.attempts + 1 });
    }
  }

  render() {
    const {
      info,
      title,
      method,
      description,
      buttonTitle
    } = this.props;

    return (
      <form
        method={method}
        className={'form'}
        onSubmit={this.onSubmit}
      >
        <div className="form__row">
          <div className="form__left">
            <div className={'form__content'}>
              <h3 className="form__title">{title}</h3>
              <p className="form__description">{description}</p>
            </div>
          </div>
          <div className="form__right">
            <div className={'form__content'}>
              <label className="form__label" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required={true}
                  ref={this.input}
                  className="form__input"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Your email address"
                  onFocus={() => this.input.current.style.border = '1px solid #E3E3E3'}
                />
              </label>
              <button className="form__button">
                {buttonTitle}
              </button>
              <div
                className="form__info"
                dangerouslySetInnerHTML={{ __html: info }}
              />
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default Form
