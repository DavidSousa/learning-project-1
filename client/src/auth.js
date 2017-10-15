import axios from 'axios';

export function authenticateUser(email, password) {
  //
  axios.post('/api/login', { email, password })
    .then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data.token);
      // window.location.href = '/passwordsApi';
    })
    .catch((error) => {
      console.log(error);
    });
}

export function isUserAuthenticated() {
  const config = {
    headers: { Authorization: localStorage.getItem('token') }
  };
  axios.get('/api/checkAuth', config)
    .then((response) => {
      console.log('1');
      return true;
    })
    .catch((error) => {
      console.log('2');
      console.log(error);
      return false;
    });
}

export function deauthenticateUser() {
  localStorage.removeItem('token');
}

export function getToken() {
  return localStorage.getItem('token');
}
