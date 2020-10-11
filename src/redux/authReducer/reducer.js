import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./actionTypes";

import { saveData } from "./../localStorage";

const initState = {
  navigate: "/dashboard",
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
      saveData("id", payload.id);
      return {
        ...state,
        navigate: state.navigate,
      };

    case REGISTER_USER_FAILURE:
      console.log(type, payload);

      return {
        ...state,
      };

    default:
      return state;
  }
};
