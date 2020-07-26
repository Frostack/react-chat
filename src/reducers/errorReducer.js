import { ERROR_EMIT, ERROR_DISCARD } from '../constants/actionTypes';

const INITIAL_STATE = {
  data: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR_EMIT:
      return { ...state, data: action.payload };
    case ERROR_DISCARD:
      return { ...state, data: null };
    default:
      return state;
  }
};
