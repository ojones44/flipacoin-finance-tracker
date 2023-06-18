import ACTIONS from './actions';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  activePage: 'dashboard',
  activeNav: false,
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

    case ACTIONS.AUTH_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.AUTH_SUCCESS:
      return {
        ...state,
        user: {
          _id: action.payload._id,
          name: action.payload.name,
          email: action.payload.email,
        },
        token: action.payload.token,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText:
          action.authType === 'login'
            ? 'Login succesful, to the dashboard...'
            : 'Form successful, to the dashboard...',
      };

    case ACTIONS.AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.message,
      };

    case ACTIONS.SET_PAGE:
      return {
        ...state,
        activePage: action.page,
      };

    case ACTIONS.SET_ACTIVE_NAV:
      return {
        ...state,
        activeNav: !state.activeNav,
      };

    case ACTIONS.LOGOUT:
      return {
        ...initialState,
        user: null,
        token: null,
      };

    case ACTIONS.RESET:
      return initialState;

    default:
      throw new Error(`Action does not exist: ${action.type}`);
  }
};

export default reducer;
export { initialState };
