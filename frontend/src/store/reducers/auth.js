import * as actionTypes from '../actions/actionTypes'

const initialState = {
  token: null,
  isAuthenticated: null,
  error: null,
  user: null
}

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    isAuthenticated: true,
    error: null
  }
}

const logout = (state, action) => {
  return {
    ...state,
    token: null,
    isAuthenticated: false
  }
}

const authFail = (state, action) => {
  return {
    ...state,
    token: null,
    isAuthenticated: false,
    error: action.error
  }
}

const getUserDetails = (state, action) => {
  return {
    ...state,
    user: action.user
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
    case actionTypes.AUTH_LOGOUT: return logout(state, action)
    case actionTypes.AUTH_FAIL: return authFail(state, action)
    case actionTypes.GET_USER_DETAILS: return getUserDetails(state, action)
    default: return state;
  }
}

export default reducer;