import { combineReducers } from 'redux';
import { SET_USER, LOGOUT } from './actions';

const user = (state = null, action: any) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default combineReducers({ user });
