import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default component => {
  const { redirectToReferrer } = component.state;
  if (redirectToReferrer) {
    return <Redirect push to="/" />;
  }

  return (
    <div>
      <MuiThemeProvider>
        <div>
          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            onChange={(event, newValue) =>
              component.setState({ first_name: newValue })}
          />
          <br />
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            onChange={(event, newValue) =>
              component.setState({ last_name: newValue })}
          />
          <br />
          <TextField
            hintText="Enter your Email"
            type="email"
            floatingLabelText="Email"
            onChange={(event, newValue) =>
              component.setState({ email: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              component.setState({ password: newValue })}
          />
          <br />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={event => component.handleClick(event)}
          />
          <div>
            Already registered?
            <Link to="/login">
              <RaisedButton label="Login" primary={true} style={style} />
            </Link>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

const style = {
  margin: 15
};
