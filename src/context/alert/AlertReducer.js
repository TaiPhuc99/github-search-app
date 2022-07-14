import { REMOVE_ALERT, SET_ALERT } from "./AlertConstant";

const alertReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_ALERT: {
      state.alert = payload.message;
      return { ...state };
    }

    case REMOVE_ALERT: {
      state.alert = null;
      return { ...state };
    }

    default:
      return state;
  }
};

export default alertReducer;
