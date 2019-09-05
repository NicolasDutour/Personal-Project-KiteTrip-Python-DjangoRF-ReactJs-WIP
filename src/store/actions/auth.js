import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token
  }
}

export const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL,
  }
}


export const logout = () => {
  localStorage.removeItem("token")
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (email, password) => {
  return dispatch => {
    axios
      .post('http://127.0.0.1:8000/rest-auth/login/', {
        email,
        password
      })
      .then(res => {
        console.log(res.data)
        const token = res.data.key
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('token', token)
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token))
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        console.log(err.response)
        dispatch(authFail())
      })
  }
}