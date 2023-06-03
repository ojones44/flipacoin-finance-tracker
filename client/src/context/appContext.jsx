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

  const addUserToLocalStorage = (name, email, token) => {
    localStorage.setItem('user', JSON.stringify({ name, email }));
    localStorage.setItem('token', token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: ACTIONS.REGISTER_BEGIN });
    try {
      const response = await axios.post('/api/auth/register', currentUser);
      const { name, email, token } = response.data;
      dispatch({
        type: ACTIONS.REGISTER_SUCCESS,
        payload: { name, email, token },
      });
      addUserToLocalStorage(name, email, token);
    } catch (error) {
      dispatch({
        type: ACTIONS.REGISTER_ERROR,
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
        registerUser,
        removeUserFromLocalStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, initialState, useAppContext };
