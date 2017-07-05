import React, {Component} from 'react';
import axios from 'axios';
import { authToken, isLoggedIn, currentUser } from '../helper.js';
import headerTemplate from '../../views/layout/header';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: isLoggedIn(),
      user: currentUser(),
      redirectToReferrer: false
    }
  }

  componentWillReceiveProps(newProps) {
    this.state = {
      isLoggedIn: isLoggedIn(),
      user: currentUser()
    }
  }

  handleLogout(event) {
    var self = this;
    var payload = {
      token: authToken()
    }

    axios.post(process.env.REACT_APP_API_BASE_URL + "oauth/revoke", payload)
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
    return headerTemplate(this);
  }
}

export default Header;