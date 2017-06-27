import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import Loginscreen from './Loginscreen';
import { isLoggedIn, authToken, currentUser } from './helper.js';
import Login from './Login';

class WelcomeScreen extends Component {
  constructor(props) {
    console.log("hello" + currentUser());
    super(props);
    this.state = {
      isLoggedIn: isLoggedIn(),
      currentUser: currentUser(),
      redirectToReferrer: false
    }   
  }

  handleLogout(event) {
    var apiBaseUrl = "http://localhost:4000/"
    var self = this;
    var payload = {
      token: authToken()
    }

    axios.post(apiBaseUrl + "oauth/revoke", payload)
    .then(function (response) {
      console.log(response);
      if (response.status == 200){
        console.log('Logout successfull')
        localStorage.clear();
        self.setState({ redirectToReferrer: true })
      }
    })
  }

  render() {
    const { redirectToReferrer } = this.state
    if (redirectToReferrer) {
      return (
        <Redirect to="/login"/>
      )
    }

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
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Welcome"
              iconElementRight={this.state.isLoggedIn ? <Logged /> : ''}
            />
            
            <div style={style.profileDiv}>
              <Menu desktop={true} width={256}>
                <MenuItem primaryText="Email" secondaryText={this.state.currentUser.email} />
                <MenuItem primaryText="First Name" secondaryText={this.state.currentUser.first_name} />
                <MenuItem primaryText="Last Name" secondaryText={this.state.currentUser.last_name} />
                <MenuItem primaryText="Phone" secondaryText={this.state.currentUser.phone} />
                <MenuItem primaryText="Nickname" secondaryText={this.state.currentUser.nick_name} />
                <MenuItem primaryText="Role" secondaryText={this.state.currentUser.roles[0].name} />
              </Menu>
              <RaisedButton label="EDIT PROFILE" primary={true} />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

const style = {
  profileDiv: {
    display: 'inline-block',
    float: 'center',
    textAlign: 'left',
    margin: '16px 10px 16px 32px',
    width: "40%"
  }
};

export default WelcomeScreen;