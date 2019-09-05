import * as actionTypes from '../actions/actionTypes'

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null
}

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    isAuthenticated: true
  }
}

const authLogout = (state, action) => {
  return {
    ...state,
    token: null,
    isAuthenticated: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action)
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action)
    default:
      return state;
  }
}

export default reducer;