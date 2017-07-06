import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'material-ui/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

export default component => {
  return (
    <div>
      <MuiThemeProvider>
        <div>
          <div style={style.profileDiv}>
            <Menu desktop={true} width={256}>
              <MenuItem
                primaryText="Email"
                secondaryText={component.state.user.email}
              />
              <MenuItem
                primaryText="First Name"
                secondaryText={component.state.user.first_name}
              />
              <MenuItem
                primaryText="Last Name"
                secondaryText={component.state.user.last_name}
              />
              <MenuItem
                primaryText="Phone"
                secondaryText={component.state.user.phone}
              />
              <MenuItem
                primaryText="Nickname"
                secondaryText={component.state.user.nick_name}
              />
            </Menu>
            <Link to={'/users/' + component.state.user.id + '/edit'}>
              <RaisedButton label="EDIT PROFILE" primary={true} />
            </Link>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

const style = {
  profileDiv: {
    display: 'inline-block',
    float: 'center',
    textAlign: 'left',
    margin: '16px 10px 16px 32px',
    width: '40%'
  }
};
