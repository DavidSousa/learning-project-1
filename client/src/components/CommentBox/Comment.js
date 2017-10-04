import React, { Component } from 'react';

import './style.css';

class Comment extends Component {
  // Sanitize html?
  rawMarkup() {
    const rawMarkup = this.props.children.toString();
    return rawMarkup;
  }

  render() {
    return (
      <div>
        <div className="chat-message-author">{this.props.author}</div>
        <div className="chat-message-text">{this.rawMarkup()}</div>
      </div>
    );
  }
}

export default Comment;
