import * as actionTypes from '../actions/actionTypes'

const initialState = {
  token: null
}

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token
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