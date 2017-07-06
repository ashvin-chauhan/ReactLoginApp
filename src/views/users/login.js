import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import RaisedButton from 'material-ui/RaisedButton';

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
            hintText="Enter your Email"
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
          <List style={style.buttonStyle}>
            <ListItem style={{ color: 'red' }}>
              {component.state.error}
            </ListItem>
          </List>
          <RaisedButton
            label="Submit"
            primary={true}
            style={style.buttonStyle}
            onClick={event => component.handleClick(event)}
          />
          <div>
            Not Registered yet? Go to registration
            <Link to="/registration">
              <RaisedButton
                label="Register"
                primary={true}
                style={style.buttonStyle}
              />
            </Link>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

const style = {
  buttonStyle: {
    margin: 15
  }
};
