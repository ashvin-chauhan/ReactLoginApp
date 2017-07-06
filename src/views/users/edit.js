import React from 'react';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default component => {
  const { redirectUrl } = component.state;
  if (redirectUrl !== '') {
    return <Redirect to={redirectUrl} />;
  }

  return (
    <div>
      <MuiThemeProvider>
        <div>
          <TextField
            id="email"
            hintText="Enter your Email"
            floatingLabelText="Email"
            value={component.state.user.email}
            onChange={component.handleChange}
          />
          <br />
          <TextField
            id="first_name"
            hintText="Enter your first name"
            floatingLabelText="First Name"
            value={component.state.user.first_name}
            onChange={component.handleChange}
          />
          <br />
          <TextField
            id="last_name"
            hintText="Enter your last name"
            floatingLabelText="Last Name"
            value={component.state.user.last_name}
            onChange={component.handleChange}
          />
          <br />
          <TextField
            id="phone"
            hintText="Enter your phone no"
            floatingLabelText="Phone No"
            value={component.state.user.phone}
            onChange={component.handleChange}
          />
          <br />
          <TextField
            id="nick_name"
            hintText="Enter your nick name"
            floatingLabelText="Nick Name"
            value={component.state.user.nick_name}
            onChange={component.handleChange}
          />
          <br />
          <RaisedButton
            label="Update"
            primary={true}
            onClick={event => component.handleClick(event)}
          />
        </div>
      </MuiThemeProvider>
    </div>
  );
};
