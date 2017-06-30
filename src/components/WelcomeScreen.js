import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
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
import { authToken, currentUser } from './helper.js';
import Login from './Login';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: currentUser().id,
      authToken: authToken(),
      user: {},
    }   
  }

  componentDidMount() {
    var self = this;
    var config={
      headers: {
        'Authorization': "bearer " + this.state.authToken,
        'Content-Type': 'application/json'
      }
    }

    axios.get(process.env.REACT_APP_API_BASE_URL + 'users/' + this.state.id, config)
    .then(function(response){
      if(response.status == 200) {
        self.setState({user: response.data})
      }
    })
  }

  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <div style={style.profileDiv}>
              <Menu desktop={true} width={256}>
                <MenuItem primaryText="Email" secondaryText={this.state.user.email} />
                <MenuItem primaryText="First Name" secondaryText={this.state.user.first_name} />
                <MenuItem primaryText="Last Name" secondaryText={this.state.user.last_name} />
                <MenuItem primaryText="Phone" secondaryText={this.state.user.phone} />
                <MenuItem primaryText="Nickname" secondaryText={this.state.user.nick_name} />
              </Menu>
              <Link to={"users/" + this.state.user.id + "/edit"} >
                <RaisedButton label="EDIT PROFILE" primary={true} />
              </Link>
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