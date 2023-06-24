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

  const logoutUser = () => {
    removeUserFromLocalStorage();
    dispatch({ type: ACTIONS.LOGOUT });
  };

  const resetState = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  const setActivePage = (page) => {
    dispatch({ type: ACTIONS.SET_PAGE, page });
  };

  const setModalOpen = (result) => {
    dispatch({ type: ACTIONS.MODAL_MENU_TOGGLE, payload: result });
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

  const updateUser = async (newUserInfo) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      const response = await axios.put(
        `api/auth/${state.user._id}`,
        newUserInfo,
        config
      );
      const { _id, name, email, token } = response.data;
      dispatch({
        type: ACTIONS.UPDATE_USER,
        payload: { _id, name, email, token },
      });
      displaySuccess('Details updated successfully.');
      addUserToLocalStorage(_id, name, email, token);
    } catch (error) {
      dispatch({
        type: ACTIONS.AUTH_ERROR,
        payload: { message: error.response.data.message },
      });
    }
  };

  const updatePassword = async (newPasswordInfo) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      await axios.put(
        `api/auth/password/${state.user._id}`,
        newPasswordInfo,
        config
      );
      displaySuccess('Password changed successfully.');
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
        resetState,
        setActivePage,
        setModalOpen,
        logoutUser,
        updateUser,
        updatePassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, initialState, useAppContext };
