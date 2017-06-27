import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import axios from 'axios';
import WelcomeScreen from './WelcomeScreen'
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
    var apiBaseUrl = "http://localhost:4000/";
    var self = this;
    var payload={
      // "email": this.state.email,
      "email": "client1@gmail.com",
      // "password": this.state.password,
      "password": "Hello@123",
      "user_id": 2,
      "grant_type": "password"
    }

    axios.post(apiBaseUrl + 'oauth/token', payload)
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
      self.setState({error: error.response.data.error})
      console.log(error.response.data.error);
    });
  }

  render() {
    const { redirectToReferrer } = this.state
    if (redirectToReferrer) {
      return (
        <Redirect to="/welcome"/>
      )
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Login"
            />
            <TextField
              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange = {(event,newValue) => this.setState({email: newValue})}
              />
            <br/>
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange = {(event,newValue) => this.setState({password: newValue})}
              />
            <br/>
            <List style={style.buttonStyle}>
              <ListItem style={{color: 'red'}}>
                {this.state.error}
              </ListItem>
            </List>
            <RaisedButton label="Submit" primary={true} style={style.buttonStyle} onClick={(event) => this.handleClick(event)}/>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  buttonStyle: {
    margin: 15,
  }
};
export default Login;