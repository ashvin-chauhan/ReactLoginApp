import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import loginTemplate from '../views/users/login'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      error: '',
      redirectToReferrer: false
    }
  }

  handleClick(event){
    var self = this;
    var payload={
      // "email": this.state.email,
      "email": "client1@gmail.com",
      // "password": this.state.password,
      "password": "Hello@123",
      "user_id": 2,
      "grant_type": "password"
    }

    axios.post(process.env.REACT_APP_API_BASE_URL + 'oauth/token', payload)
    .then(function (response) {
      console.log(response);
      if(response.status == 200){
        console.log("Login successfull");
        localStorage.setItem( 'AUTH_TOKEN', response.data.token.access_token );
        localStorage.setItem( 'CURRENT_USER', JSON.stringify(response.data.user) );
        self.setState({ redirectToReferrer: true })
      }
      else{
        console.log("Invalid email and password");
        alert("Invalid email and password");
      }
    })
    .catch(function (error) {
      console.log(error)
      self.setState({error: error.response.data.error})
      console.log(error.response.data.error);
    });
  }

  render() {
    return loginTemplate(this);
  }
}
export default Login;