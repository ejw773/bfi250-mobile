import {
  TOGGLE_SEEN_STATUS_SUCCESS,
  DELETE_SEEN_STATUS_SUCCESS,
  GET_SEEN_STATUS_SUCCESS,
  GET_SEEN_STATUS_FAIL,
} from '../actionTypes';

const initialState = {};

export default function seenStatus(state = initialState, action) {
  const {
    type,
    payload = {
      film: '',
      seenStatus: null,
    },
  } = action;
  const { film, seenStatus } = payload;
  switch (type) {
    case TOGGLE_SEEN_STATUS_SUCCESS:
      return {
        ...state,
        seenStatus: {
          ...state.seenStatus,
          [film]: seenStatus,
        },
      };
    case DELETE_SEEN_STATUS_SUCCESS:
      return {
        ...state,
        seenStatus: {
          ...state.seenStatus,
          [film]: seenStatus,
        },
      };
    case GET_SEEN_STATUS_SUCCESS:
      return {
        ...state,
        seenStatus: payload,
      };
    case GET_SEEN_STATUS_FAIL:
      return {
        ...state,
        seenStatus: 'Failed to Load',
      };
    default:
      return state;
  }
}
