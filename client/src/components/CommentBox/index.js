import React, { Component } from 'react';
import axios from 'axios';
import socketIoClient from 'socket.io-client';

import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Header from '../App/header';
import './style.css';

const socket = socketIoClient('/comments');

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  loadCommentsAxios = () => {
    axios.get('/api/comments')
    .then(res => {
      this.setState({ comments: res.data },
        () => {
          //console.log(this.state)
        }
      );
    });
  }

  loadCommentsFetch = () => {
    fetch('/api/comments')
    .then(res => res.json())
    .then(comments => this.setState({ comments: comments },
      function() {
        //console.log(this.state)
      }
    ));
  }

  handleNewMessage = (comment) => {
    axios.post('/api/comments', comment)
    .then(res => {
      //console.log(res);
      socket.emit('newMessage', res.data);
      let newComments = this.state.comments.concat([res.data]);
      this.setState({ comments: newComments });
    })
    .catch(err => {
      console.error(err);
    });
  }

  handleDeleteMessages = () => {
    axios.delete('/api/comments')
    .catch(err => {
      console.error(err);
    });

    this.loadCommentsAxios();
  }

  subscribeCommentSocket = () => {
    socket.on('newMessage', comment => {
      let newComments = this.state.comments.concat([comment]);
      this.setState({ comments: newComments });
      //console.log(data);
    });
  }

  componentDidMount() {
    this.loadCommentsAxios();
    this.subscribeCommentSocket();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="chat">
          <CommentList comments = { this.state.comments } />
          <CommentForm onNewMessage = { this.handleNewMessage } onDeleteMessages = {this.handleDeleteMessages } />
        </div>
      </div>
    );
  }
}

export default CommentBox;
