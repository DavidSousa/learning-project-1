import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './style.css';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <NavLink exact={true} to='/' activeClassName="selected">Home</NavLink>
        <NavLink to='/passwordsApi' activeClassName="selected">Passwords API</NavLink>
        <NavLink to='/passwordsSocket' activeClassName="selected">Passwords Socket</NavLink>
        <NavLink to='/commentBox' activeClassName="selected">Chat</NavLink>
      </header>
    );
  }
}

export default Header;
