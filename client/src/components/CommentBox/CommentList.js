import React, { Component } from 'react';
import Comment from './Comment';

import './style.css';

class CommentList extends Component {

  render() {

    let commentNodes = this.props.comments.map(comment => {
      return (
        <Comment key={comment._id} author={comment.author}>
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
