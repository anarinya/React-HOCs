import { CHANGE_AUTH } from '../actions';

export default (isAuthenticated = false, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return isAuthenticated;
  }
}