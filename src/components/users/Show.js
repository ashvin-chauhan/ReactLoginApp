import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import { authToken, currentUser } from '../helper.js';
import { getUser } from '../../services/userService';
import Login from '../Login';
import showTemplate from '../../views/users/show'

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: currentUser().id,
      user: {},
    }   
  }

  componentDidMount() {
    var self = this;

    getUser(this.state.id)
      .then(function(response){
        if(response.status == 200) {
          self.setState({user: response.data})
        }
      })
  }

  render() {
    return showTemplate(this);
  }
}

export default Show;