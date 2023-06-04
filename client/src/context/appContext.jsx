import axios from 'axios';
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

  const addUserToLocalStorage = (_id, name, email, token) => {
    localStorage.setItem('user', JSON.stringify({ _id, name, email }));
    localStorage.setItem('token', token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const resetState = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  const authenticateUser = async ({ currentUser, endpoint, authType }) => {
    dispatch({ type: ACTIONS.AUTH_BEGIN });
    try {
      const response = await axios.post(`/api/auth/${endpoint}`, currentUser);
      const { _id, name, email, token } = response.data;
      dispatch({
        type: ACTIONS.AUTH_SUCCESS,
        payload: { _id, name, email, token },
        authType,
      });
      addUserToLocalStorage(_id, name, email, token);
    } catch (error) {
      dispatch({
        type: ACTIONS.AUTH_ERROR,
        payload: { message: error.response.data.message },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        displaySuccess,
        passwordMatch,
        authenticateUser,
        removeUserFromLocalStorage,
        resetState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, initialState, useAppContext };
