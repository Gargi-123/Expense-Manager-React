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

const initState = {
  transactions: [],
  credits: [],
  debits: [],
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
        transactions: [...state.transactions, payload],
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

    case GET_CREDIT_TRANSACTIONS_REQUEST: {
      console.log(type, payload);

      return {
        ...state,
      };
    }

    case GET_CREDIT_TRANSACTIONS_SUCCESS: {
      console.log(type, payload);

      return {
        ...state,
        credits: [...payload]
      };
    }

    case GET_CREDIT_TRANSACTIONS_FAILURE: {
      console.log(type, payload);

      return {
        ...state,
      };
    }

    case GET_DEBIT_TRANSACTIONS_REQUEST: {
      console.log(type, payload);

      return {
        ...state,
      };
    }

    case GET_DEBIT_TRANSACTIONS_SUCCESS: {
      console.log(type, payload);

      return {
        ...state,
        debits: [...payload]
      };
    }

    case GET_DEBIT_TRANSACTIONS_FAILURE: {
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
