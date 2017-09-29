import React, { Component } from 'react';
import Header from '../App/header';

import './style.css';

class PasswordsApi extends Component {
  constructor() {
    super();
    this.state = {
      passwordsApi: []
    }
  }

  componentDidMount() {
    this.getPasswordsApi();
  }

  // Arrow functions understand that "this" is the component "this",
  // otherwise (using old notation) it would be the function's "this"
  getPasswordsApi = () => {
    fetch('/api/passwords')
    .then(res => res.json())
    .then(passwords => this.setState({ passwordsApi: passwords }));
  }

  render() {
    const passwordsApi = this.state.passwordsApi;
    return (
      <div className="App">
      <Header />
      <div>
        <h1>API Passwords</h1>
        { passwordsApi.length ? (
          <div>
            <ul className="password-list">
              { passwordsApi.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button className="get-more-button" onClick = { this.getPasswordsApi }>
              GET MORE
            </button>
          </div>
        ) : (
          <div/>
        )}
      </div>
      </div>
    );
  }
}

export default PasswordsApi;
