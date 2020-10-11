import axios from "axios";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "./actionTypes";

export const registerUserRequest = (payload) => ({
  type: REGISTER_USER_REQUEST,
  payload,
});

export const registerUserSuccess = (payload) => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFailure = (payload) => ({
  type: REGISTER_USER_FAILURE,
  payload,
});

export const registerUser = (payload) => async (dispatch) => {
  dispatch(registerUserRequest(payload));

  try {
    const response = await axios.post(
      "http://localhost:3000/users",
      payload
    );
    dispatch(registerUserSuccess(response.data));
  } catch (err) {
    dispatch(registerUserFailure(err));
  }
};

export const loginUserRequest = (payload) => ({
  type: LOGIN_USER_REQUEST,
  payload,
});

export const loginUserSuccess = (payload) => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFailure = (payload) => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

export const loginUser = (payload) => async (dispatch) => {
  dispatch(loginUserRequest(payload));

  try {
    const response = await axios.get(
      `http://localhost:3000/users/${payload.id}`
    );
    dispatch(loginUserSuccess({ credentials: payload, response: response.data }));
  } catch (err) {
    dispatch(loginUserFailure(payload));
  }
};
