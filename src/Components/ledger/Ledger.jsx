import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import LedgerNavbar from "../../components/navbar/LedgerNavbar"

const Ledger = () => {
  const allTranscations = useSelector((state) => state.ledger.transactions);
  console.log("allTranscations", allTranscations)
  return (
    <>
    <Navbar/>
    <div>
      <Link to="/ledger">
        <LedgerNavbar/>
      </Link>
      <div className="row mt-5">
        <div className="col bg-light">
          <div className="row mt-4 text-center">
            <div className="col" style={{ maxWidth: "1000px", margin: "auto" }}>
              <h2 className="p-2">All Expenses</h2>
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
                  {allTranscations && allTranscations.map((items) => (
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
    </div>
    </>
  );
};

export default Ledger;
