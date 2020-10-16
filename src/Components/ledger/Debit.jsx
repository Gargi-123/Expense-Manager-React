import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "./../../redux/localStorage";
import { getDebitTransactions } from "./../../redux/ledgerReducer/actions";
import { Link } from "react-router-dom";

const Debit = () => {
  const dispatch = useDispatch();
  const debits = useSelector((state) => state.ledger.credit);
  console.log("credits", debits);

  const loadedData = loadData("auth");
  const { id } = loadedData;

  useEffect(() => {
    dispatch(getDebitTransactions(id));
  }, [dispatch]);
  return (
    <>
      <div><Link to="/ledger/debit">Debit</Link></div>
      <div className="row mt-5">
      <div className="col bg-light">
              <div className="row mt-4 text-center">
                <div className="col" style={{ maxWidth: "1000px", margin: "auto" }}>
                  <h2 className="p-2">Debit Data</h2>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                    {debits && debits.map((items) => (
                    <>
                     <tr>
                     <td>{items.time_stamp} </td>
                     <td>{items.title}</td>
                     <td>{items.amount} </td>
                     <td>{items.type} </td>     
                   </tr>
                   </>
                  ))}
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
      </div>
    </>
    
  )
};

export default Debit;
