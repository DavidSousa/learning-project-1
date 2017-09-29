import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Header from '../App/header';

import './style.css';
import MOCK_DATA from './mockData.js';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h2>Comments:</h2>
        <CommentList data={MOCK_DATA} />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
