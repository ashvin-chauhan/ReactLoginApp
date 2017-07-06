import React, {Component} from 'react';
import { isLoggedIn, currentUser } from '../helper.js';
import { logout } from '../../services/authService'
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
    logout()
      .then(function (response) {
        self.handleResponse(response)
      })
  }

  handleResponse(response) {
    if (response.status == 200){
      localStorage.clear();
      this.setState({ redirectToReferrer: true, isLoggedIn: false })
    }
  }

  render() {
    return headerTemplate(this);
  }
}

export default Header;