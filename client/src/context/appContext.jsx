import React, { useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';

// Actions
import ACTIONS from './actions';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = (message) => {
    dispatch({ type: ACTIONS.DISPLAY_ALERT, message });
  };

  const displaySuccess = (message) => {
    dispatch({ type: ACTIONS.DISPLAY_SUCCESS, message });
  };

  const clearAlert = () => {
    dispatch({ type: ACTIONS.CLEAR_ALERT });
  };

  const passwordMatch = (result) => {
    dispatch({ type: ACTIONS.PW_MATCH, result });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        displaySuccess,
        passwordMatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, initialState, useAppContext };
