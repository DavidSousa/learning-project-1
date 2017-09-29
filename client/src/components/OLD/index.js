import React, { Component } from 'react';

import './style.css';
import socketIoClient from 'socket.io-client';

class App extends Component {
  constructor() {
    super();
    this.state = {
      passwordsApi: [],
      passwordsSocket: []
    }
  }

  componentDidMount() {
    this.getPasswordsApi();
    this.getPasswordsSocket();
  }

  // Arrow functions understand that "this" is the component "this",
  // otherwise (using old notation) it would be the function's "this"
  getPasswordsApi = () => {
    fetch('/api/passwords')
    .then(res => res.json())
    .then(passwords => this.setState({ passwordsApi: passwords }));
  }

  getPasswordsSocket = () => {
    const socket = socketIoClient();
    socket.on('sendPasswords', data => {
      this.setState({ passwordsSocket: data });
      //console.log(data);
    });
  }

  render() {
    const passwordsApi = this.state.passwordsApi;
    const passwordsSocket = this.state.passwordsSocket;
    return (
      <div className="App">
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
      <div>
        <h1>Socket Passwords</h1>
        { passwordsSocket.length ? (
          <div>
          <h4>Generated every 10 seconds</h4>
            <ul className="password-list">
              { passwordsSocket.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
          </div>
        ) : (
          <h4>Generated every 10 seconds</h4>
        )}
      </div>
      </div>
    );
  }
}

export default App;
