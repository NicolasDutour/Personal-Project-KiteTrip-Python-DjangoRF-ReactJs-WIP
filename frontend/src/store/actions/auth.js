import axios from 'axios'
import * as actionTypes from './actionTypes'


export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token
  }
}

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  }
}


export const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem('expirationDate');
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

export const authSignup = (username, email, password1, password2) => {
  return dispatch => {
    axios
      .post('http://127.0.0.1:8000/rest-auth/registration/', {
        username,
        email,
        password1,
        password2
      })
      .then(res => {
        const token = res.data.key
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('token', token)
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token))
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err.response.data))
      })
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
        const token = res.data.key
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('token', token)
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token))
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err.response.data))
      })
  }
}

export const getUserDetails = () => {
  return dispatch => {
    axios
      .get('http://127.0.0.1:8000/rest-auth/user/')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        dispatch(authFail(err.response.data))
      })
  }
}


export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  }
}