import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';
import { isLoggedIn } from './helper'
import registerTemplate from '../views/users/register';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      redirectToReferrer: false
    }
  }

  componentWillMount() { // When access the route with first time
    if(isLoggedIn()) {
      this.setState({ redirectToReferrer: true })
    }
  }

  handleClick(event){
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    var self = this;
    var payload={
      "first_name": this.state.first_name,
      "last_name":this.state.last_name,
      "email":this.state.email,
      "password":this.state.password
    }
    axios.post(process.env.REACT_APP_API_BASE_URL + '/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
       console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }

  render() {
    return registerTemplate(this);
  }
}
export default Register;