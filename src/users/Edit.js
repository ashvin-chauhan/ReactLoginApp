import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import { authToken } from '../helper.js';
var apiBaseUrl = "http://localhost:4000/";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      authToken: authToken(),
      user: '',
      redirectUrl: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var self = this;
    var config={
      headers: {
        'Authorization': "bearer " + this.state.authToken,
        'Content-Type': 'application/json'
      }
    }

    axios.get(apiBaseUrl + 'users/' + this.state.id, config)
    .then(function(response){
      if(response.status == 200) {
        self.setState({user: response.data})
      }
    })
  }

  handleChange(e) {
    const user = this.state.user;
    var key = e.target.id;
    user[key] = e.target.value;
    this.setState({
        user,
    });
  }

  handleClick(e) {
    var self = this;
    var config={
      headers: {
        'Authorization': "bearer " + this.state.authToken,
        'Content-Type': 'application/json'
      }
    }

    var payload={
      id: this.state.id,
      user: this.state.user
    }

    axios.put(apiBaseUrl + 'users', payload, config)
    .then(function(response){
      console.log(response);
      if(response.status == 200) {
        self.setState({user: response.data, redirectUrl: '/welcome'})
      }
    }) 
  }

  render () {
    const { redirectUrl } = this.state;
    if (redirectUrl != '') {
      return (
        <Redirect to={redirectUrl}/>
      )
    }
    return (

      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              id="email"
              hintText="Enter your Email"
              floatingLabelText="Email"
              value={this.state.user.email}
              onChange = {this.handleChange}
            />
            <br/>
            <TextField
              id="first_name"
              hintText="Enter your first name"
              floatingLabelText="First Name"
              value={this.state.user.first_name}
              onChange = {this.handleChange}
            />
            <br/>
            <TextField
              id="last_name"
              hintText="Enter your last name"
              floatingLabelText="Last Name"
              value={this.state.user.last_name}
              onChange = {this.handleChange}
            />
            <br/>
            <TextField
              id="phone"
              hintText="Enter your phone no"
              floatingLabelText="Phone No"
              value={this.state.user.phone}
              onChange = {this.handleChange}
            />
            <br/>
            <TextField
              id="nick_name"
              hintText="Enter your nick name"
              floatingLabelText="Nick Name"
              value={this.state.user.nick_name}
              onChange = {this.handleChange}
            />
            <br/>
            <RaisedButton label="Update" primary={true} onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Edit;