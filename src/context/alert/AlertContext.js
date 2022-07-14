import { createContext, useReducer } from "react";
import { callAlert, removeAlert } from "./AlertAction";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set an Alert
  const setAlert = (message) => {
    dispatch(callAlert(message));
    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
