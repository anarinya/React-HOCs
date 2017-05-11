import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication';

const rootReducer = combineReducers({
  isAuthenticated: AuthenticationReducer
});

export default rootReducer;