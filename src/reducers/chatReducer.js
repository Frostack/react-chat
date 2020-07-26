import {
  CHAT_MESSAGES_FETCH,
  CHAT_MESSAGE_SEND,
  CHAT_CREATE_CHANNEL,
  CHAT_DELETE_CHANNEL,
} from '../constants/actionTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHAT_MESSAGES_FETCH:
      return { ...state };
    case CHAT_MESSAGE_SEND:
      return { ...state };
    case CHAT_CREATE_CHANNEL:
      return { ...state };
    case CHAT_DELETE_CHANNEL:
      return { ...state };
    default:
      return state;
  }
};
