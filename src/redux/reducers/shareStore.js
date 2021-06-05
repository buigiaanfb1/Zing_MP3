import {
  FETCH_ALBUMS,
  IS_USER_LOGIN,
} from '../../Templates/Clients/Home/modules/constants';
import { CLOSE_QUEUE, OPEN_QUEUE } from '../action/action';

const initialState = {
  user: null,
  openQueue: false,
  albums: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_USER_LOGIN:
      state.user = payload;
      return { ...state };
    case OPEN_QUEUE:
      state.openQueue = true;
      return { ...state };

    case CLOSE_QUEUE:
      state.openQueue = false;
      return { ...state };

    case FETCH_ALBUMS:
      state.albums = payload;
      return { ...state };

    default:
      return state;
  }
};
