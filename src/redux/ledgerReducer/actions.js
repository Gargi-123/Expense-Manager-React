import axios from "axios";
import {
  ADD_TRANSACTION_REQUEST,
  ADD_TRANSACTION_SUCCESS,
  ADD_TRANSACTION_FAILURE,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAILURE,
  GET_CREDIT_TRANSACTIONS_REQUEST,
  GET_CREDIT_TRANSACTIONS_SUCCESS,
  GET_CREDIT_TRANSACTIONS_FAILURE,
  GET_DEBIT_TRANSACTIONS_REQUEST,
  GET_DEBIT_TRANSACTIONS_SUCCESS,
  GET_DEBIT_TRANSACTIONS_FAILURE,
} from "./actionTypes";

export const addTransactionRequest = (payload) => ({
  type: ADD_TRANSACTION_REQUEST,
  payload,
});

export const addTransactionSuccess = (payload) => ({
  type: ADD_TRANSACTION_SUCCESS,
  payload,
});

export const addTransactionFailure = (payload) => ({
  type: ADD_TRANSACTION_FAILURE,
  payload,
});

export const addTransaction = (payload) => async (dispatch) => {
  dispatch(addTransactionRequest(payload));

  try {
    const response = await axios.post(
      "http://localhost:3000/transactions",
      payload
    );
    dispatch(addTransactionSuccess(response.data));
  } catch (err) {
    dispatch(addTransactionFailure(err));
  }
};

export const getTransactionsRequest = (payload) => ({
  type: GET_TRANSACTIONS_REQUEST,
  payload,
});

export const getTransactionsSuccess = (payload) => ({
  type: GET_TRANSACTIONS_SUCCESS,
  payload,
});

export const getTransactionsFailure = (payload) => ({
  type: GET_TRANSACTIONS_FAILURE,
  payload,
});

export const getTransactions = (payload) => async (dispatch) => {
  dispatch(getTransactionsRequest(payload));
  try {
    const response = await axios.get(
      `http://localhost:3000/transactions?user_id=${payload}`
    );
    dispatch(getTransactionsSuccess(response.data));
  } catch (err) {
    dispatch(getTransactionsFailure(err));
  }
};

export const getCreditTransactionsRequest = (payload) => ({
  type: GET_CREDIT_TRANSACTIONS_REQUEST,
  payload,
});

export const getCreditTransactionsSuccess = (payload) => ({
  type: GET_CREDIT_TRANSACTIONS_SUCCESS,
  payload,
});

export const getCreditTransactionsFailure = (payload) => ({
  type: GET_CREDIT_TRANSACTIONS_FAILURE,
  payload,
});

export const getCreditTransactions = (payload) => async (dispatch) => {
  dispatch(getCreditTransactionsRequest(payload));

  try {
    const response = await axios.get(
      `http://localhost:3000/transactions?user_id=${payload}&type=credit`
    );
    dispatch(getCreditTransactionsSuccess(response.data));
  } catch (err) {
    dispatch(getCreditTransactionsFailure(err));
  }
};

export const getDebitTransactionsRequest = (payload) => ({
  type: GET_DEBIT_TRANSACTIONS_REQUEST,
  payload,
});

export const getDebitTransactionsSuccess = (payload) => ({
  type: GET_DEBIT_TRANSACTIONS_SUCCESS,
  payload,
});

export const getDebitTransactionsFailure = (payload) => ({
  type: GET_DEBIT_TRANSACTIONS_FAILURE,
  payload,
});

export const getDebitTransactions = (payload) => async (dispatch) => {
  dispatch(getDebitTransactionsRequest(payload));

  try {
    const response = await axios.get(
      `http://localhost:3000/transactions?user_id=${payload}&type=debit`
    );
    dispatch(getDebitTransactionsSuccess(response.data));
  } catch (err) {
    dispatch(getDebitTransactionsFailure(err));
  }
};
