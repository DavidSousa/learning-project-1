import React, { Component } from 'react';

import './style.css';

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      text: '',
    }
  }

  handleAuthorChange = (e) => {
    this.setState({ author: e.target.value });
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleNewMessage = ((e) => {
    e.preventDefault();

    let author = this.state.author.trim();
    let text = this.state.text.trim();

    if(!text || !author) {
      return;
    }

    this.props.onNewMessage({ author: author, text: text });
    this.setState({ author: '', text: '' });
  });

  handleDeleteMessages = ((e) => {
    e.preventDefault();
    this.props.onDeleteMessages();
  })

  render() {
    return (
      <div className="chat-form">
        <input type='text' placeholder='Your name...' value={this.state.author} onChange={this.handleAuthorChange} />
        <input type='text' placeholder='Say something...' value={this.state.text} onChange={this.handleTextChange} />
        <button onClick={this.handleNewMessage}>SEND</button>
        <button onClick={this.handleDeleteMessages}>DELETE ALL</button>
      </div>
    );
  }
}

export default CommentForm;
