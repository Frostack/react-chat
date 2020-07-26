import { USER_REGISTER, USER_LOGIN, USER_VERIFY, USER_LOGOUT } from '../constants/actionTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return { ...state };
    case USER_LOGIN:
      return { ...state };
    case USER_VERIFY:
      return { ...state };
    case USER_LOGOUT:
      return { ...state };
    default:
      return state;
  }
};
