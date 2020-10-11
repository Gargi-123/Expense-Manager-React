import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "./actionTypes";

import { saveData } from "./../localStorage";

const initState = {
  authResponse: "",
  isLoggedIn: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_REQUEST:
      console.log(type, payload);

      return {
        ...state,
      };

    case REGISTER_USER_SUCCESS:
      console.log(type, payload);
      saveData("auth", { id: payload.id });
      return {
        ...state,
        navigate: state.navigate,
      };

    case REGISTER_USER_FAILURE:
      console.log(type, payload);

      return {
        ...state,
      };

    case LOGIN_USER_REQUEST:
      console.log(type, payload);

      return {
        ...state,
      };

    case LOGIN_USER_SUCCESS:
      console.log(type, payload);
      const { credentials, response } = payload;

      if (
        Object.keys(response).length === 0 ||
        credentials.email !== response.email
      ) {
        return {
          authResponse: "Account doesn't exist",
          isLoggedIn: false,
        };
      } else if (credentials.password !== response.password) {
        return {
          authResponse: `Password doesn't match`,
          isLoggedIn: false,
        };
      } else {
        return {
          ...state,
          isLoggedIn: true,
        };
      }

    case LOGIN_USER_FAILURE:
      console.log(type, payload);

      return {
        ...state,
      };

    default:
      return state;
  }
};
