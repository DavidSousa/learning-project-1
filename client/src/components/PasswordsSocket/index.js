import React, { Component } from 'react';
import Header from '../App/header';

import './style.css';
import socketIoClient from 'socket.io-client';

class PasswordsSocket extends Component {
  constructor() {
    super();
    this.state = {
      passwordsSocket: []
    }
  }

  componentDidMount() {
    this.getPasswordsSocket();
  }

  getPasswordsSocket = () => {
    const socket = socketIoClient();
    socket.on('sendPasswords', data => {
      this.setState({ passwordsSocket: data });
      //console.log(data);
    });
  }

  render() {
    const passwordsSocket = this.state.passwordsSocket;
    return (
      <div className="App">
      <Header />
      <div>
        <h1>Socket Passwords</h1>
        { passwordsSocket.length ? (
          <div>
          <h4>Generated every 3 seconds</h4>
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

export default PasswordsSocket;
