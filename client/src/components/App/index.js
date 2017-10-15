import React, { Component } from 'react';
import axios from 'axios';

import { authenticateUser } from '../../auth.js';
import Header from './header';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleLogin = () => {
    const email = this.state.email;
    const password = this.state.password;

    authenticateUser(email, password);
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Welcome</h1>
        <div>

            <div className="login-field">
              <div>Email</div>
              <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
            </div>
            <div className="login-field">
              <div>Password</div>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </div>
            <button type="submit" className="login-button" onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}


export default App;
