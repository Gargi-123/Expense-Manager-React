import React from "react"
import { Link } from "react-router-dom"
import Styles from "../../styles/navbar-ledger.module.css"


function Navbar() {
    return (
        <>
            <div id={Styles.nav}>
                <ul>
                    <li><Link to="/ledger">All</Link></li>
                    <li><Link to="/ledger/credit">Credit</Link></li>
                    <li><Link to="/ledger/debit">Debit</Link></li>
                </ul>
            </div>
        </>
    );
}
export default Navbar