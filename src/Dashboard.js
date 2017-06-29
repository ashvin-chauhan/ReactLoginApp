import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { authToken } from './helper.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: authToken()
    }
  }

  render() {
    if (this.state.authToken) {
      return (
        <Redirect to="/welcome" />
      )
    }

    return (
      <div>
        <MuiThemeProvider>
          <div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Dashboard;