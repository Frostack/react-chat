import * as types from '../constants/actionTypes';

export const registerUser = (username, password) => async dispatch => {
  dispatch({ type: types.USER_REGISTER });
};

export const loginUser = (username, password) => async dispatch => {
  dispatch({ type: types.USER_LOGIN });
};

export const verifyUser = () => async dispatch => {
  dispatch({ type: types.USER_VERIFY });
};

export const logoutUser = () => async dispatch => {
  dispatch({ type: types.USER_LOGOUT });
};
