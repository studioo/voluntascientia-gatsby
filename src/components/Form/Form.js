import React, { Component } from 'react'
import { navigate } from 'gatsby'
import axios from 'axios'

import './style.css'


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      attempts: 0,
      sending: false,
      errorMsg: ''
    }

    this.input = React.createRef();

    this.onFocus = this.onFocus.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onFocus() {
    this.input.current.style.border = '1px solid #E3E3E3'
    this.setState({ errorMsg: '' });
  }

  async onSubmit(event) {
    event.preventDefault()
    
    // Disable button at 1.5 sec
    this.setState({ sending: true })
    setTimeout(() => this.setState({
      sending: false
    }), 1500);
    
    try {
      const email = JSON.stringify({
        email: this.state.email
      }, null)

      const response = await axios({
        method: this.props.method,
        url: this.props.endpoint,
        data: email
      })

      this.setState({
        email: '',
        errorMsg: ''
      })

      navigate('/confirm/', {
        state: {
          prevPage: location.pathname
        }
      })
    } catch (error) {
      console.log(error)

      if (this.state.attempts >= 2) {
        navigate('/failure/', {
          state: {
            prevPage: location.pathname
          }
        })
      }

      this.input.current.style.border = '1px solid red'
      this.setState({
        attempts: this.state.attempts + 1,
        errorMsg: 'Something went wrong, please try again!'
      })
    }
  }

  render() {
    const {
      info,
      title,
      method,
      description,
      buttonTitle
    } = this.props

    return (
      <form
        method={method}
        className={'form'}
        onSubmit={this.onSubmit}
      >
        <div className="form__row">
          <div className="form__left">
            <div className={'form__content'}>
              <h3 className="form__title">
                {title}
              </h3>
              <p className="form__description">
                {description}
              </p>
              <p className={'form__error'}>
                {this.state.errorMsg}
              </p>
            </div>
          </div>
          <div className="form__right">
            <div className={'form__content'}>
              <label
                htmlFor="email"
                className="form__label"
              >
                <input
                  id="email"
                  type="email"
                  name="email"
                  required={true}
                  ref={this.input}
                  onFocus={this.onFocus}
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Your email address"
                  className="form__input"
                />
              </label>
              <button
                className="form__button"
                disabled={this.state.sending}
              >
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
