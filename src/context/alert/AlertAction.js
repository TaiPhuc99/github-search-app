import { REMOVE_ALERT, SET_ALERT } from "./AlertConstant";

export const callAlert = (message) => {
  return {
    type: SET_ALERT,
    payload: { message },
  };
};

export const removeAlert = () => {
  return {
    type: REMOVE_ALERT,
  };
};
