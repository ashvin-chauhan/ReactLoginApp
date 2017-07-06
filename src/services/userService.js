import axios from 'axios';
import { apiHeader } from '../components/helper';

export function getUser(id) {
  return axios.get(
    process.env.REACT_APP_API_BASE_URL + 'users/' + id,
    apiHeader()
  );
}

export function updateUser(component) {
  return axios.put(
    process.env.REACT_APP_API_BASE_URL + 'users',
    {
      id: component.id,
      user: component.user
    },
    apiHeader()
  );
}
