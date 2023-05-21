import ACTIONS from './actions';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

const reducer = (state, action) => {
  if (action.type === ACTIONS.DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: "You've missed one! 🙈",
    };
  }
  if (action.type === ACTIONS.DISPLAY_SUCCESS) {
    return {
      ...state,
      showAlert: true,
      alertType: 'success',
      alertText: 'It all checks out. Boom 😎',
    };
  }
  if (action.type === ACTIONS.CLEAR_ALERT) {
    return {
      initialState,
    };
  }
  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
export { initialState };
