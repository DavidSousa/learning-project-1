import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
            <ul>
              {passwordsApi.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button onClick={this.getPasswordsApi}>Get More</button>
          </div>
        ) : (
          <div/>
        )}
      </div>
      <div>
        <h1>Socket Passwords</h1>
        { passwordsSocket.length ? (
          <div>
            <ul>
              {passwordsSocket.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
          </div>
        ) : (
          <div/>
        )}
      </div>
      </div>
    );
  }
}

export default App;
