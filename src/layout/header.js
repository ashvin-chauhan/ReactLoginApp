import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import { isLoggedIn, authToken } from '../helper.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: isLoggedIn()
    }   
  }

  handleLogout(event) {
    var apiBaseUrl = "http://localhost:4000/"
    var self = this;
    var payload = {
      token: authToken(),
      redirectToReferrer: false
    }

    axios.post(apiBaseUrl + "oauth/revoke", payload)
    .then(function (response) {
      console.log(response);
      if (response.status == 200){
        console.log('Logout successfull')
        localStorage.clear();
        self.setState({ redirectToReferrer: true, isLoggedIn: false })
      }
    })
  }

  render() {
    const { redirectToReferrer } = this.state

    const Logged = (props) => (
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Profile" />
        <MenuItem primaryText="Sign out" onClick={(event) => this.handleLogout(event)} />
      </IconMenu>
    );

    Logged.muiName = 'IconMenu';
    
    if (this.state.isLoggedIn) {
      return (
        <div>
          <MuiThemeProvider>
            <AppBar
              title="Welcome"
              iconElementRight={<Logged />}
            />
          </MuiThemeProvider>
        </div>
      )
    } else {
      return(
        <div>
          <MuiThemeProvider>
            <div>
            <AppBar
              title="Login App"
              iconElementRight={
                <div>
                  <Link to="/login" >
                    <FlatButton label="Login" />
                  </Link>
                  <Link to="/registration" >
                    <FlatButton label="Sign Up" />
                  </Link>
                </div>
              }
            />
            { redirectToReferrer &&
              <Redirect to="/login"/>
            }
            </div>
          </MuiThemeProvider>
        </div>
      )
    }
  }
}

export default Header;