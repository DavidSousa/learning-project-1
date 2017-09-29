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

  handleSubmit = ((e) => {
    e.preventDefault();
    console.log(`${this.state.author} said ${this.state.text}`);
  });

  render() {
    return (
      <div>
        <input type='text' placeholder='Your name...' value={this.state.author} onChange={this.handleAuthorChange} />
        <input type='text' placeholder='Say something...' value={this.state.text} onChange={this.handleTextChange} />
        <button onClick={this.handleSubmit}>SEND</button>
      </div>
    );
  }
}

export default CommentForm;
