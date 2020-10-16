import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { loadData } from "./../../redux/localStorage";
import { v4 as uuidv4 } from "uuid";
import { addTransaction } from "./../../redux/ledgerReducer/actions";
import { getTransactions } from "./../../redux/ledgerReducer/actions";

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
    const { transactions } = this.props;
    console.log("transactions",transactions);
    return (
      <div className="container">
        <div className="row mt-3 mb-5">
          <div className="col">
            <div className="card text-white rounded mb-3 ">
              <div className="card-header bg-success">Balance</div>
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col">
            <div className="card text-white rounded mb-3">
              <div className="card-header bg-success">Income</div>
              <div className="card-body"></div>
            </div>
          </div>

          <div className="col">
            <div className="card text-white rounded mb-3">
              <div className="card-header bg-success">Transaction</div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-5">
          <div className="col bg-light">
            <div className="row mt-4 text-center">
              <div className="col" style={{ maxWidth: "1000px", margin: "auto" }}>
                <h2 className="p-2">Your Expenses</h2>
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
                    {transactions && transactions.filter((items, index) => {
                      console.log(items,index)
                      if (index < 5) {
                        return (
                          <>
                            <tr style={{ backgroundColor: "#FF7F7F" }}>
                              <td>{items.time_stamp} </td>
                              <td>{items.title}</td>
                              <td>{items.amount} </td>
                              <td>{items.type} </td>
                            </tr>
                          </>

                        )
                      }
                    })}
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
              class="form-control"
              placeholder="Add Description"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <br />
            <label>Amount</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Amount"
              name="amount"
              value={amount}
              onChange={this.handleChange}
            />
            <br />
            <div class="form-check d-flex">
              <label class="mr-2">Select Type:</label>
              <div class="mr-2">
                <input
                  type="radio"
                  value="credit"
                  name="type"
                  onChange={this.handleChange}
                />{" "}
                Credit
              </div>
              <div class="mr-2">
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
              className="btn btn-success btn-block"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
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
