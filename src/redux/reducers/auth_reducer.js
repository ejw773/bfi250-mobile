import {
  VERIFY_LOGIN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_ALL,
  LOGOUT,
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_FILM_SET,
  DELETE_ACCOUNT,
} from '../actionTypes';

// let user = {}
// const user = JSON.parse(localStorage.getItem("user"));

// const getStorage = async () => {
//   const userData = await AsyncStorage.getItem('user')
//   const user = JSON.parse(userData)
//   return user
// }

// user = getStorage()
// console.log(user)

// getStorage();
// const initialState = user.token
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

const initialState = {
  isLoggedIn: false,
  user: {
    name: null,
    email: null,
    filmSet: 'bfi2012',
  },
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case VERIFY_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: {
          name: payload.name,
          email: payload.email,
          filmSet: payload.filmSet,
          token: payload.token,
        },
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT_ALL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.newEmail,
        },
      };
    case CHANGE_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.newName,
        },
      };
    case CHANGE_FILM_SET:
      return {
        ...state,
        user: {
          ...state.user,
          filmSet: action.payload.newSet,
        },
      };
    default:
      return state;
  }
}
