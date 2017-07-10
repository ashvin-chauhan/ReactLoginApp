import { Component } from 'react';
import { getUser } from '../../services/userService';
import showTemplate from '../../views/users/show';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      user: {}
    };
  }

  setUser(id = this.state.id) {
    var self = this;

    getUser(id).then(function(response) {
      if (response.status === 200) {
        self.setState({ user: response.data });
      }
    });
  }

  editUrl() {
    var url = this.props.match.url;
    return url + '/edit';
  }

  componentWillMount() {
    this.setUser();
  }

  componentWillReceiveProps(nextProps) {
    const params = nextProps.match.params;
    if (nextProps.id !== this.state.id) {
      this.setState({ id: params.id });
      this.setUser(params.id);
    }
  }

  render() {
    return showTemplate(this);
  }
}

export default Show;
