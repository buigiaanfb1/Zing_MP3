import { IS_USER_LOGIN } from '../../Templates/Clients/Home/modules/constants';
import { CLOSE_QUEUE, OPEN_QUEUE } from '../action/action';

const initialState = {
  user: null,
  openQueue: false,
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

    default:
      return state;
  }
};
