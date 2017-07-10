import axios from 'axios';
import { apiHeader, currentUser, authToken } from '../components/helper';

export function getCustomers() {
  return axios.get(
    process.env.REACT_APP_API_BASE_URL +
      '/clients/' +
      currentUser().id +
      '/customers',
    apiHeader()
  );
}

export function deleteCustomer(id) {
  return axios.delete(process.env.REACT_APP_API_BASE_URL + 'users', {
    params: { id: id },
    headers: {
      Authorization: 'bearer ' + authToken(),
      'Content-Type': 'application/json'
    }
  });
}
