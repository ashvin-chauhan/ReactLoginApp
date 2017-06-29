import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

class Dashboard extends Component {
  render() {
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