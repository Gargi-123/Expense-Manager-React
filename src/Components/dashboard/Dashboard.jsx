import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { loadData } from "./../../redux/localStorage";
import { v4 as uuidv4 } from "uuid";
import { addTransaction } from "./../../redux/ledgerReducer/actions";
import { getTransactions } from "./../../redux/ledgerReducer/actions";
import Navbar from "../navbar/Navbar";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      amount: "",
      type: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    const { title, amount, type } = this.state;
    const { addTransaction } = this.props;
    const loadedData = loadData("auth");
    const { id: user_id } = loadedData;
    const item = {
      user_id,
      id: uuidv4(),
      title,
      amount,
      type,
      time_stamp: new Date(),
    };

    addTransaction(item);
  };

  componentDidMount() {
    const { getTransactions } = this.props;
    const loadedData = loadData("auth");
    const { id: user_id } = loadedData;
    getTransactions(user_id);
  }

  render() {
    const { title, amount } = this.state;
    let { transactions } = this.props;
    console.log("transactions", transactions);
    transactions = transactions.reverse().filter((item, index) => index < 5);

    let income = transactions
      .filter((item) => item.type === "debit")
      .reduce((acc, item) => acc + Number(item.amount), 0);

    let expenses = transactions
      .filter((item) => item.type === "credit")
      .reduce((acc, item) => acc + Number(item.amount), 0);

    let balance = income - expenses;

    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row mt-3 mb-5">
            <div className="col">
              <div className="card rounded mb-3 text-center font-weight-bold">
                <div className="card-header text-white" style={{background: "#008b02"}}>
                  <h5>Balance</h5>
                </div>
                <div className="card-body">
                  <h4>&#x20B9;{balance}</h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded mb-3 text-center font-weight-bold">
                <div className="card-header text-white" style={{background: "#008b02"}}>
                  <h5>Income</h5>
                </div>
                <div className="card-body">
                  <h4>&#x20B9;{income}</h4>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card rounded mb-3 text-center font-weight-bold">
                <div className="card-header text-white" style={{background: "#008b02"}}>
                  <h5>Expenses</h5>
                </div>
                <div className="card-body">
                  <h4>&#x20B9;{expenses}</h4>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="row mt-5">
            <div className="col">
              <div className="row mt-4 text-center">
                <div
                  className="col"
                  style={{ maxWidth: "1000px", margin: "auto" }}
                >
                  <h2 className="p-2">Recent Transactions</h2>
                  <table className="table">
                    <thead style={{background: "#008b02", color: "#fff"}}>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions &&
                        transactions.map((item, index) => (
                          <tr
                            key={item.id}
                          >
                            <td>{item.time_stamp} </td>
                            <td>{item.title}</td>
                            <td>{item.amount} </td>
                            <td>{item.type} </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col">
              <h2 className="p-2 text-center">ADD Expenses</h2>
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add Description"
                name="title"
                value={title}
                onChange={this.handleChange}
              />
              <br />
              <label>Amount</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Amount"
                name="amount"
                value={amount}
                onChange={this.handleChange}
              />
              <br />
              <div className="form-check d-flex">
                <label className="mr-2">Select Type:</label>
                <div className="mr-2">
                  <input
                    type="radio"
                    value="credit"
                    name="type"
                    onChange={this.handleChange}
                  />{" "}
                  Credit
                </div>
                <div className="mr-2">
                  <input
                    type="radio"
                    value="debit"
                    name="type"
                    onChange={this.handleChange}
                  />{" "}
                  Debit
                </div>
              </div>
              <button
                onClick={this.handleAdd}
                className="btn btn-block"
                style={{background: "#008b02", color: "#fff", fontWeight: "bold"}}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const mapStateToProps = (state) => ({
  transactions: state.ledger.transactions,
});

export const mapDispatchToProps = (dispatch) => ({
  addTransaction: (payload) => dispatch(addTransaction(payload)),
  getTransactions: (payload) => dispatch(getTransactions(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
