import actionTypes from '../config/actionTypes'

const auth = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        logged: action.logged,
        email: action.email,
      }
    default:
      return state
  }
}
export default auth
