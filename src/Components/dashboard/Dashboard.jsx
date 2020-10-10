import React from "react"
import { Layout, Balance, ListTransaction, Income, Transaction, Add, AddContainer,AddDate, AddType, AddDescription, AddValue, AddButton } from "./Styles.jsx"

function Dashboard() {
    return (
        <div>
            <Layout>
                <Balance>
                    Balance
                </Balance>
                <Income>
                    Income
              </Income>
                <Transaction>
                    Transaction
              </Transaction>
            </Layout>
            <hr />

            <Add>
                <ListTransaction>

                </ListTransaction>
                <AddContainer>

                    <AddDescription type="text" placeholder="Add description"  >
                    </AddDescription>
                    <br />
                    <input type="radio" id="credit" name="credit" value="credit"
                        checked />
                    <label for="credit">Credit</label>
                    <br />
                    <input type="radio" id="debit" name="debit" value="debit" />
                    <label for="debit">Debit</label>
                    <br/>
                    <AddValue type="number" placeholder="Value"></AddValue>
                    <br/>
                    <br/>
                    <AddDate type="date" name="trip-start"
                        value="date"></AddDate>
                    <AddButton>ADD</AddButton>
                </AddContainer>
            </Add>

        </div>
    )

}

export default Dashboard




