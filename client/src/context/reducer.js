import ACTIONS from './actions';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: action.message,
      };

    case ACTIONS.DISPLAY_SUCCESS:
      return {
        ...state,
        showAlert: true,
        alertType: 'success',
        alertText: action.message,
      };

    case ACTIONS.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };

    case ACTIONS.PW_MATCH:
      return {
        ...state,
        showAlert: true,
        alertType: action.result ? 'success' : 'danger',
        alertText: action.result
          ? 'Passwords Match 👍🏻'
          : 'Passwords do not match 😱',
      };

    default:
      throw new Error(`Action does not exist: ${action.type}`);
  }
};

export default reducer;
export { initialState };
