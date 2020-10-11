import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"



class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className="container">
                <div className="row mt-3 mb-5">
                    <div className="col">
                        <div className="card text-white rounded mb-3 ">
                            <div className="card-header bg-success">Balance</div>
                            <div className="card-body">
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white rounded mb-3">
                            <div className="card-header bg-success">Income</div>
                            <div className="card-body">
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card text-white rounded mb-3">
                            <div className="card-header bg-success">Transaction</div>
                            <div className="card-body">
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row mt-5">
                    <div className="col bg-light">
                        <div class="card" style={{"boxShadow":" 0 10px 6px -6px #777"}}>
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                        <br/>
                        <div class="card" style={{"boxShadow":" 0 10px 6px -6px #777"}}>
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                        <br/>
                        <div class="card" style={{"boxShadow":" 0 10px 6px -6px #777"}}>
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                        <br/>
                        <div class="card" style={{"boxShadow":" 0 10px 6px -6px #777"}}>
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                        <br/>
                        <div class="card" style={{"boxShadow":" 0 10px 6px -6px #777"}}>
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                        <label>Descrition</label>
                        <input type="text" class="form-control" placeholder="Add Description" />
                        <br/>
                        <label>Amount</label>
                        <input type="text" class="form-control" placeholder="Enter Amount" />
                        <br/>
                        <label>Select Type</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                Credit
                                 </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label class="form-check-label" for="exampleRadios2">
                                Debit
                                    </label>
                        </div>
                        <button className="btn btn-success btn-block">ADD</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard