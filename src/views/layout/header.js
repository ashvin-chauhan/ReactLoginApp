import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import { isLoggedIn } from '../../components/helper.js';

export default (component) => {
  const { redirectToReferrer } = component.state

  const Logged = (props) => (
    <IconMenu
    {...props}
    iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    <Link to={"/users/" + component.state.user.id} >
        <MenuItem primaryText="Profile" />
    </Link>
    <MenuItem primaryText="Sign out" onClick={(event) => component.handleLogout(event)} />
    </IconMenu>
  );

  Logged.muiName = 'IconMenu';

  if (isLoggedIn()) {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title={<Link to="/">Welcome</Link>}
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
            title={<Link to="/">Login App</Link>}
            onTitleTouchTap={component.handleTouchTap}
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