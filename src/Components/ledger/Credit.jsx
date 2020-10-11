import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "./../../redux/localStorage";
import { getCreditTransactions } from "./../../redux/ledgerReducer/actions";

const Credit = () => {
  const credits = useSelector((state) => state.ledger.credit);
  const dispatch = useDispatch();
  const loadedData = loadData("auth");
  const { id } = loadedData;

  console.log("credits", credits);

  useEffect(() => {
    dispatch(getCreditTransactions(id));
  }, [dispatch]);

  return <div>Credit</div>;
};

export default Credit;
