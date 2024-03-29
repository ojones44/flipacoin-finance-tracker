import axios from 'axios';
import React, { useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';

// Actions
import ACTIONS from './actions';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearAlert = () => {
    dispatch({ type: ACTIONS.CLEAR_ALERT });
  };

  const clearAlertTimeout = (time) => {
    setTimeout(() => {
      dispatch({ type: ACTIONS.CLEAR_ALERT });
    }, time);
  };

  const displayAlert = (message, time) => {
    dispatch({ type: ACTIONS.DISPLAY_ALERT, message });

    if (time) {
      clearAlertTimeout(time);
    }
  };

  const displaySuccess = (message, time) => {
    dispatch({ type: ACTIONS.DISPLAY_SUCCESS, message });

    if (time) {
      clearAlertTimeout(time);
    }
  };

  const passwordMatch = (result) => {
    dispatch({ type: ACTIONS.PW_MATCH, result });
  };

  const addUserToLocalStorage = (_id, name, email, token, avatar) => {
    localStorage.setItem('user', JSON.stringify({ _id, name, email }));
    localStorage.setItem('token', token);

    if (avatar) {
      localStorage.setItem('avatar', JSON.stringify(avatar));
    }
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('avatar');
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
      const { _id, name, email, token, avatar } = response.data;
      dispatch({
        type: ACTIONS.AUTH_SUCCESS,
        payload: { _id, name, email, token, avatar },
        authType,
      });
      clearAlertTimeout(3000);
      addUserToLocalStorage(_id, name, email, token, avatar);
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
      clearAlertTimeout(3000);
      addUserToLocalStorage(_id, name, email, token);
    } catch (error) {
      dispatch({
        type: ACTIONS.AUTH_ERROR,
        payload: { message: error.response.data.message },
      });
    }
  };

  const updateAvatar = async (newAvatar) => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      const response = await axios.put(
        `api/auth/avatar/${state.user._id}`,
        newAvatar,
        config
      );
      const { avatar } = response.data;
      dispatch({
        type: ACTIONS.UPDATE_USER_AVATAR,
        payload: { avatar },
      });
      displaySuccess('Avatar updated successfully.');
      clearAlertTimeout(3000);
      localStorage.setItem('avatar', JSON.stringify(avatar));
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
      clearAlertTimeout(3000);
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
        updateAvatar,
        updatePassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, initialState, useAppContext };
