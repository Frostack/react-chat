import * as types from '../constants/actionTypes';

export const emitError = error => {
  return { type: types.ERROR_EMIT, payload: error };
};

export const discardError = () => {
  return { type: types.ERROR_DISCARD };
};
