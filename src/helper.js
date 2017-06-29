export function authToken() {
  return localStorage.getItem('AUTH_TOKEN')
}

export function isLoggedIn() {
  if (authToken()) {
    return true;
  } else {
    return false;
  }
}

export function currentUser() {
  return JSON.parse(localStorage.getItem('CURRENT_USER'))
}