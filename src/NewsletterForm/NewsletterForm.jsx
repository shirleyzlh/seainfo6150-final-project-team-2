import React, { Component } from 'react'

class NewsletterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    }
  }

  onSubmit = () => {
    this.setState({
      submitted: true
    });
  }

  render() {
    return this.state.submitted ? (
      <div>Thank you!</div>
    ) : (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="email-address" />
        <input type="submit" value="Sign up" />
      </form>
    )
  }
}

export default NewsletterForm;
