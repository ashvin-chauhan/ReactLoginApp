import { Component } from 'react';
import { login } from '../services/authService';
import { isLoggedIn } from './helper';
import loginTemplate from '../views/users/login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      redirectToReferrer: false
    };
  }

  componentWillMount() {
    // When access the route with first time
    if (isLoggedIn()) {
      this.setState({ redirectToReferrer: true });
    }
  }

  handleClick(event) {
    var self = this;
    var payload = {
      // "email": this.state.email,
      email: 'client1@gmail.com',
      // "password": this.state.password,
      password: 'Hello@123',
      user_id: 2,
      grant_type: 'password'
    };

    login(payload)
      .then(function(response) {
        self.handelResponse(response);
      })
      .catch(function(error) {
        self.setState({ error: error.response.data.error });
      });
  }

  handelResponse(response) {
    if (response.status === 200) {
      localStorage.setItem('AUTH_TOKEN', response.data.token.access_token);
      localStorage.setItem('CURRENT_USER', JSON.stringify(response.data.user));
      this.setState({ redirectToReferrer: true });
    } else {
      console.log('Invalid email and password');
      alert('Invalid email and password');
    }
  }

  render() {
    return loginTemplate(this);
  }
}
export default Login;
