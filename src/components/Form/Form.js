import React, { Component } from 'react'
import axios from 'axios';

import './style.css'

// TODO: redirect
class Form extends Component {
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
    event.preventDefault();
    try {
      const email = JSON.stringify({ email: this.state.email }, null)
      const response = await axios.post(this.props.endpoint, email);
      this.setState({ email: '' })
    } catch (error) {
      console.log(error)
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
                  className="form__input"
                  placeholder="Your email address"
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
