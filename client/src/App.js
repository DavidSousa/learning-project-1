import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      passwords: []
    }
  }

  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    fetch('/api/passwords')
    .then(res => res.json())
    .then(passwords => this.setState({ passwords }));
  }

  render() {
    const { passwords } = this.state;
    return (
      <div className="App">
        { passwords.length ? (
          <div>
            <ul>
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button onClick={this.getPasswords}>Get More</button>
          </div>
        ) : (
          <div/>
        )}
      </div>
    );
  }
}

export default App;
