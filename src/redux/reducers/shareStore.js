import { CLOSE_QUEUE, OPEN_QUEUE } from '../action/action';

const initialState = {
  openQueue: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
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
