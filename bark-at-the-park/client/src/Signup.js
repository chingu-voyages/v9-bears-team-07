import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`/create`)
    // Need to redirect on successful Signup
    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleChange} id="username" />
          <input type="email" value={this.state.email} onChange={this.handleChange} id="email" />
          <input type="password" value={this.state.password} onChange={this.handleChange} id="password" />
          <input type="submit" id="submit" />
        </form>
      </div>
    )
  }
}


export default Signup;
