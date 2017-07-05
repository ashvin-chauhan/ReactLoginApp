import axios from 'axios';
import { authToken } from '../components/helper.js';

export function login(params) {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + 'oauth/token', params
  )
}

export function logout() {
  return axios.post(
    process.env.REACT_APP_API_BASE_URL + "oauth/revoke", {
      token: authToken()
    }
  )
}