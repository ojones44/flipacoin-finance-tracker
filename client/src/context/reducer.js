import ACTIONS from './actions';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
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

    case ACTIONS.REGISTER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.REGISTER_SUCCESS:
      return {
        ...state,
        user: { name: action.payload.name, email: action.payload.email },
        token: action.payload.token,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Form successful, to the dashboard...',
      };

    case ACTIONS.REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.message,
      };

    default:
      throw new Error(`Action does not exist: ${action.type}`);
  }
};

export default reducer;
export { initialState };
