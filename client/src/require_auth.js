import React, { Component, PropTypes } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticated: false
    };
  }

  componentWillMount() {
    const config = {
      headers: { Authorization: localStorage.getItem('token') }
    };
    axios.get('/api/checkAuth', config)
      .then((response) => {
        this.setState({ loading: false, authenticated: true })
      })
      .catch((error) => {
        this.setState({ loading: false, authenticated: false })
      });
  }

  render() {
    if(this.state.loading) {
      return null;
    }

    if(this.state.authenticated) {
      return (this.props.children);
    } else {
      return <Redirect to="/" />
    }
  }
}
