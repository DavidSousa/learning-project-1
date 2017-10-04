import React, { Component } from 'react';
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

  handleSubmit = () => {
    console.log(this.state.email, this.state.password);
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
          <form onSubmit={this.handleSubmit}>
            <div className="login-field">
              <div>Email</div>
              <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
            </div>
            <div className="login-field">
              <div>Password</div>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
    );
  }
}


export default App;
