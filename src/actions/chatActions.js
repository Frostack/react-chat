import * as types from '../constants/actionTypes';

export const fetchMessages = () => async dispatch => {
  dispatch({ type: types.CHAT_MESSAGES_FETCH });
};

export const sendMessage = () => async dispatch => {
  dispatch({ type: types.CHAT_MESSAGE_SEND });
};

export const fetchChannels = () => async dispatch => {
  dispatch({ type: types.CHAT_FETCH_CHANNELS });
};

export const createChannel = () => async dispatch => {
  dispatch({ type: types.CHAT_CREATE_CHANNEL });
};

export const deleteChannel = () => async dispatch => {
  dispatch({ type: types.CHAT_DELETE_CHANNEL });
};

export const fetchMembers = () => async dispatch => {
  dispatch({ type: types.CHAT_FETCH_MEMBERS });
};
