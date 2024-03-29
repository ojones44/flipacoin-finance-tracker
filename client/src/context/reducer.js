import ACTIONS from './actions';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: JSON.parse(localStorage.getItem('user')) || null,
  avatar: JSON.parse(localStorage.getItem('avatar')) || null,
  token: localStorage.getItem('token') || null,
  activePage: 'dashboard',
  modalMenuOpen: false,
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
        avatar: action.payload.avatar,
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

    case ACTIONS.MODAL_MENU_TOGGLE:
      return {
        ...state,
        modalMenuOpen: action.payload,
      };

    case ACTIONS.LOGOUT:
      return {
        ...initialState,
        user: null,
        token: null,
      };

    case ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: {
          _id: action.payload._id,
          name: action.payload.name,
          email: action.payload.email,
        },
        token: action.payload.token,
      };

    case ACTIONS.UPDATE_USER_AVATAR:
      return {
        ...state,
        avatar: action.payload.avatar,
      };

    case ACTIONS.RESET:
      return initialState;

    default:
      throw new Error(`Action does not exist: ${action.type}`);
  }
};

export default reducer;
export { initialState };
