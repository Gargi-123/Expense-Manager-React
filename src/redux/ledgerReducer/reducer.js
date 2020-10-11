import {
  ADD_TRANSACTION_REQUEST,
  ADD_TRANSACTION_SUCCESS,
  ADD_TRANSACTION_FAILURE,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAILURE,
} from "./actionTypes";

const initState = {
  transactions: [],
};

export const ledgerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION_REQUEST: {
      console.log(type, payload);

      return {
        ...state,
      };
    }

    case ADD_TRANSACTION_SUCCESS: {
      console.log(type, payload);

      return {
        ...state,
      };
    }

    case ADD_TRANSACTION_FAILURE: {
      console.log(type, payload);

      return {
        ...state,
      };
    }

    case GET_TRANSACTIONS_REQUEST: {
      console.log(type, payload);

      return {
        ...state,
      };
    }

    case GET_TRANSACTIONS_SUCCESS: {
      console.log(type, payload);

      return {
        ...state,
        transactions: [...payload],
      };
    }

    case GET_TRANSACTIONS_FAILURE: {
      console.log(type, payload);

      return {
        ...state,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
