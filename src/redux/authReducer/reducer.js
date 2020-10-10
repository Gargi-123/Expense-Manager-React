import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./actionTypes";




const initState = {};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_REQUEST:
      console.log(type, payload);

      return {
        ...state,
      };

    case REGISTER_USER_SUCCESS:
      console.log(type, payload);

      return {
        ...state,
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
