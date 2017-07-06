import { Component } from 'react';
import { getUser, updateUser } from '../../services/userService';
import editTemplate from '../../views/users/edit';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      user: '',
      redirectUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var self = this;

    getUser(this.state.id).then(function(response) {
      if (response.status === 200) {
        self.setState({ user: response.data });
      }
    });
  }

  handleChange(e) {
    const user = this.state.user;
    var key = e.target.id;
    user[key] = e.target.value;
    this.setState({
      user
    });
  }

  handleClick(e) {
    var self = this;
    updateUser(self.state).then(function(response) {
      self.handleResponse(response);
    });
  }

  handleResponse(response) {
    if (response.status === 200) {
      this.setState({
        user: response.data,
        redirectUrl: '/users/' + this.state.id
      });
    }
  }

  render() {
    return editTemplate(this);
  }
}

export default Edit;
