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
    getTransactions(user_id)
  }

  render() {
    const { title, amount } = this.state;
    const { transactions  } = this.props;
    console.log(transactions);
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
            <div class="card" style={{ boxShadow: " 0 10px 6px -6px #777" }}>
              <div class="card-body">This is some text within a card body.</div>
            </div>
            <br />
            <div class="card" style={{ boxShadow: " 0 10px 6px -6px #777" }}>
              <div class="card-body">This is some text within a card body.</div>
            </div>
            <br />
            <div class="card" style={{ boxShadow: " 0 10px 6px -6px #777" }}>
              <div class="card-body">This is some text within a card body.</div>
            </div>
            <br />
            <div class="card" style={{ boxShadow: " 0 10px 6px -6px #777" }}>
              <div class="card-body">This is some text within a card body.</div>
            </div>
            <br />
            <div class="card" style={{ boxShadow: " 0 10px 6px -6px #777" }}>
              <div class="card-body">This is some text within a card body.</div>
            </div>
          </div>
          <div className="col">
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

export default connect(null, mapDispatchToProps)(Dashboard);
