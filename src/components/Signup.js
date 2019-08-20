import React, { Component } from 'react'
import axios from 'axios';

import './Signup.css'

class Signup extends Component {
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

  onSubmit(event) {
    event.preventDefault()
    const URL = 'https://iz81y6vlzk.execute-api.eu-west-1.amazonaws.com/dev/subscribe'

    axios.post(URL, JSON.stringify({ email: this.state.email }, null))
      .then(res => {
        console.log(res)
        this.setState({ email: '' })
      })
      .catch(err => console.log(err))
  }

  svg() {
    return (
      <svg
        width="46"
        height="46"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
        <path
          d="M511.945 185.266V462.852C511.945 477.09 505.887 489.91 496.211 498.887C487.434 507.023 475.691 511.996 462.789 511.996H49.1484C36.2461 511.996 24.5039 507.023 15.7383 498.895C6.0625 489.91 0.00390625 477.09 0.00390625 462.852V185.266H511.945Z" 
          fill="#99DA6F"
        />
        <path
          d="M511.941 185.266L315.164 21.418C280.867 -7.14062 231.074 -7.14062 196.777 21.418L0 185.266H0.00390625L58 233.555L196.777 349.105C231.078 377.672 280.871 377.672 315.16 349.105L453.949 233.555L511.945 185.266"
          fill="#81C256"
        />
        <path
          d="M453.949 83.0117V233.555L315.16 349.105C280.871 377.672 231.078 377.672 196.777 349.105L58 233.555V83.0117C58 51.625 83.4492 26.1758 114.844 26.1758H397.113C428.508 26.1758 453.949 51.625 453.949 83.0117V83.0117Z"
          fill="#F9F9F9"
        />
        <path 
          d="M453.949 83.0117V199.074L315.16 314.629C280.871 343.191 231.078 343.191 196.777 314.629L58 199.074V83.0117C58 51.625 83.4492 26.1758 114.844 26.1758H397.113C428.508 26.1758 453.949 51.625 453.949 83.0117V83.0117Z" 
          fill="white"
        />
        <path 
          d="M464.227 480.102C462.461 480.102 460.684 479.508 459.219 478.289L334.27 374.258C330.945 371.488 330.496 366.547 333.262 363.223C336.031 359.898 340.973 359.445 344.297 362.215L469.242 466.242C472.57 469.012 473.023 473.949 470.254 477.277C468.703 479.141 466.473 480.102 464.227 480.102V480.102Z" 
          fill="#81C256"
        />
        <path 
          d="M177.43 374.465L74.7461 462.172C60.6016 474.258 66.9258 497.355 85.2578 500.543C114.746 505.668 149.203 511.418 158.469 512H49.1523C36.2461 512 24.5039 507.027 15.7383 498.898C6.0625 489.914 0.00390625 477.094 0.00390625 462.855V185.266H37.1055V374.488C37.4609 412.738 82.3008 433.266 111.703 408.797L167.648 362.211C171.035 359.402 176.102 359.914 178.84 363.414C181.484 366.785 180.719 371.727 177.43 374.465V374.465Z" 
          fill="#81C256"
        />
        <path 
          d="M299.833 212.083C299.833 200.352 295.266 189.324 286.971 181.029C274.29 168.349 270.052 149.935 275.909 132.974C276.305 131.828 276.122 130.562 275.419 129.573C274.715 128.586 273.577 128 272.364 128H271.983C256.627 128 244.134 140.493 244.134 155.85V179.948C244.134 182.309 242.212 184.231 239.851 184.231C237.488 184.231 235.566 182.309 235.566 179.948C235.566 178.527 234.764 177.228 233.493 176.594C232.222 175.959 230.701 176.097 229.565 176.95C224.232 180.956 219.813 186.205 216.785 192.13C213.61 198.346 212 205.058 212 212.084C212 236.091 231.363 255.656 255.292 255.992C255.492 255.997 255.693 256 255.896 256C255.902 256 255.909 256 255.917 256C255.918 256 255.917 256 255.917 256C256.127 256 256.336 255.997 256.545 255.992C280.472 255.654 299.833 236.089 299.833 212.083ZM267.971 243.508C264.752 246.726 260.472 248.5 255.918 248.5H255.917C251.363 248.5 247.082 246.726 243.862 243.507C240.643 240.287 238.869 236.006 238.869 231.453C238.869 226.899 240.643 222.619 243.862 219.399L255.917 207.345L267.971 219.399C274.617 226.046 274.617 236.86 267.971 243.508ZM278.761 240.421C282.204 231.611 280.379 221.2 273.274 214.096L258.568 199.39C257.865 198.686 256.912 198.292 255.917 198.292C254.923 198.292 253.969 198.686 253.265 199.39L238.56 214.096C233.923 218.732 231.369 224.896 231.369 231.453C231.369 234.563 231.945 237.586 233.045 240.398C224.789 233.717 219.5 223.507 219.5 212.083C219.5 202.323 223.283 193.235 230.031 186.456C232.145 189.633 235.757 191.731 239.85 191.731C246.347 191.731 251.633 186.445 251.633 179.948V155.85C251.633 146.264 258.295 138.204 267.233 136.06C265.441 143.856 265.397 151.979 267.135 159.853C269.348 169.882 274.373 179.038 281.667 186.333C288.545 193.211 292.333 202.356 292.333 212.084C292.333 223.519 287.032 233.74 278.761 240.421Z" 
          fill="#81C256"
        />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="512" height="512" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    )
  }

  // TODO: refactor form
  render() {
    return (
      <form
        method="post"
        onSubmit={this.onSubmit}
        min-width="400 500 600 700 800"
        className="seva-form formkit-form"
        style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '6px' }}
      >
        <div data-style="full">
          <div
            data-element="column"
            className="formkit-column"
            style={{ backgroundColor: 'rgb(249, 250, 251)' }}
          >
            <h1
              className="formkit-header"
              data-element="header"
              style={{
                color: 'rgb(77, 77, 77)',
                fontSize: '20px',
                fontWeight: 700,
              }}
            >
              Join the Newsletter
            </h1>
            <div
              data-element="subheader"
              className="formkit-subheader"
              style={{ color: 'rgb(104, 104, 104)' }}
            >
              <p>Subscribe to get the latest content by email.</p>
            </div>
            <div className="formkit-image">
              {this.svg()}
            </div>
          </div>
          <div data-element="column" className="formkit-column">
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            />

            <div data-element="fields" className="seva-fields formkit-fields">
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  name="email"
                  aria-label="Your email address"
                  placeholder="Your email address"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required={true}
                  type="email"
                  style={{
                    borderColor: 'rgb(227, 227, 227)',
                    borderRadius: '4px',
                    color: 'rgb(0, 0, 0)',
                    fontWeight: 400,
                  }}
                />
              </div>
              <button
                data-element="submit"
                className="formkit-submit formkit-submit"
                style={{
                  backgroundColor: '#62a835',
                  borderRadius: '24px',
                  color: 'white',
                  fontWeight: 700,
                }}
              >
                <div className="formkit-spinner" />
                <span>Subscribe</span>
              </button>
            </div>
            <div
              data-element="guarantee"
              className="formkit-guarantee"
              style={{
                color: 'rgb(77, 77, 77)',
                fontSize: '13px',
                fontWeight: 400,
              }}
            >
              <p>I won’t send you spam.</p>
              <p>
                Unsubscribe at <em>any</em> time.
              </p>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default Signup
