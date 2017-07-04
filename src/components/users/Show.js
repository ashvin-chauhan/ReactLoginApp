import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import { authToken, currentUser } from '../helper.js';
import Login from '../Login';
import showTemplate from '../../views/users/show'

class Show extends Component {
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
    return showTemplate(this);
  }
}

export default Show;