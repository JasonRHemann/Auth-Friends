import React from "react";
import axios from 'axios';
import { connect } from 'react-redux'
import { login } from '../actions/index'

class Login extends React.Component {
  state = {
    credentials: {
      username: "jason",
      password: "jason"
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.setState.credentials,
        [e.target.name]: e.target.value 
      }
    });
  };  

  login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/friends')
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
      <form onSubmit={this.login}>
        <input
          type="text"
          name="username"
          value={this.state.credentials.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="password"
          value={this.state.credentials.password}
          onChange={this.handleChange}
        />
        <button onSubmit={this.login}>Log in</button>
      </form>
    </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login)
