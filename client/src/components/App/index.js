import React, { Component } from 'react';
import Header from './header';

import './style.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Welcome</h1>
      </div>
    );
  }
}

export default App;
