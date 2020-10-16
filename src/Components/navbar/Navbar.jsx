import React from "react"
import { Link } from "react-router-dom"
import Styles from "../../styles/navbar.module.css"


function Navbar() {
    return (
        <>
            <div id={Styles.nav}>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/ledger">Ledger</Link></li>
                </ul>
            </div>
        </>
    );
}
export default Navbar