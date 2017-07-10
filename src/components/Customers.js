import { Component } from 'react';
import customerTemplate from '../views/customers';
import { getCustomers, deleteCustomer } from '../services/customerService';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      isModelOpen: false,
      delCustomer: ''
    };
  }

  handleDialogOpen = customer => {
    this.setState({ isModelOpen: true, delCustomer: customer });
  };

  handleDialogClose = () => {
    this.setState({ isModelOpen: false, delCustomer: '' });
  };

  componentWillMount() {
    var self = this;

    getCustomers().then(function(response) {
      self.setState({ customers: response.data.data.customers });
    });
  }

  getFirstLetter(name) {
    return name.charAt(0).toUpperCase();
  }

  deleteCustomer() {
    var self = this;
    const newState = self.state.customers;

    deleteCustomer(self.state.delCustomer.id).then(function(response) {
      newState.splice(newState.indexOf(self.state.delCustomer), 1);
      self.setState({ customers: newState });
      self.handleDialogClose();
    });
  }

  render() {
    return customerTemplate(this);
  }
}

export default Customers;
