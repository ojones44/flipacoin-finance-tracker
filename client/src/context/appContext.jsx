import React, { useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';

// Actions
import ACTIONS from './actions';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: ACTIONS.DISPLAY_ALERT });
  };

  const displaySuccess = () => {
    dispatch({ type: ACTIONS.DISPLAY_SUCCESS });
  };

  const clearAlert = () => {
    dispatch({ type: ACTIONS.CLEAR_ALERT });
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, clearAlert, displaySuccess }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, initialState, useAppContext };
