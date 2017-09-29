import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './style.css';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <Link to='/'>Home</Link>
        <Link to='/passwordsApi'>Passwords API</Link>
        <Link to='/passwordsSocket'>Passwords Socket</Link>
      </header>
    );
  }
}

export default Header;
