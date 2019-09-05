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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action)
    default:
      return state;
  }
}

export default reducer;