import React, { Component } from 'react';

import './style.css';

class Comment extends Component {

  // Sanitize html?
  rawMarkup() {
    let rawMarkup = this.props.children.toString();
    return rawMarkup;
  }

  render() {
    return (
      <div>
        <h3>{this.props.author}</h3>
        <span>{this.rawMarkup()}</span>
      </div>
    );
  }
}

export default Comment;
