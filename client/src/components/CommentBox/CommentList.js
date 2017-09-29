import React, { Component } from 'react';
import Comment from './Comment';

import './style.css';

class CommentList extends Component {

  render() {

    let commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={comment.author} key={comment.id} text={comment.text}>
          {comment.author}
          {comment.text}
        </Comment>
      );
    });

    return (
      <div>
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;
