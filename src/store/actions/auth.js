import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token
  }
}


export const logout = () => {
  localStorage.removeItem("token")
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

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
        localStorage.setItem('token', token)
        dispatch(authSuccess(token))
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}