import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "./../../redux/localStorage";
import { getDebitTransactions } from "./../../redux/ledgerReducer/actions";

const Debit = () => {
  const dispatch = useDispatch();
  const credits = useSelector((state) => state.ledger.credit);
  console.log("credits", credits);

  const loadedData = loadData("auth");
  const { id } = loadedData;

  useEffect(() => {
    dispatch(getDebitTransactions(id));
  }, [dispatch]);
  return <div>Debit</div>;
};

export default Debit;
