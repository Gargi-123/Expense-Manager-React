import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Ledger = () => {
  const allTranscations = useSelector((state) => state.ledger.transactions);
  console.log("allTranscations", allTranscations)
  return (
    <div>
      <Link to="/ledger">All</Link>
      <Link to="/ledger/credit">Credit</Link>
      <Link to="/ledger/debit">Debit</Link>
    </div>
  );
};

export default Ledger;
