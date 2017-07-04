import React, {Component} from 'react';
import axios from 'axios';
import { authToken } from '../helper.js';
import editTemplate from '../../views/users/edit'

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      authToken: authToken(),
      user: '',
      redirectUrl: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleChange(e) {
    const user = this.state.user;
    var key = e.target.id;
    user[key] = e.target.value;
    this.setState({
        user,
    });
  }

  handleClick(e) {
    var self = this;
    var config={
      headers: {
        'Authorization': "bearer " + this.state.authToken,
        'Content-Type': 'application/json'
      }
    }

    var payload={
      id: this.state.id,
      user: this.state.user
    }

    axios.put(process.env.REACT_APP_API_BASE_URL + 'users', payload, config)
    .then(function(response){
      console.log(response);
      if(response.status == 200) {
        self.setState({user: response.data, redirectUrl: '/users/' + self.state.id })
      }
    }) 
  }

  render () {
    return editTemplate(this);
  }
}

export default Edit;