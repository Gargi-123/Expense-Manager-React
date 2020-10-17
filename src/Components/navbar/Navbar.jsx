import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "../../styles/navbar.module.css";

function Navbar() {
  return (
    <>
      <div
        // id={Styles.nav}
        style={{
          background: "#008b02",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "#ccc",
          padding: 20,
          fontSize: 17,
        }}
      >
        <div>
          <NavLink
            to="/dashboard"
            activeStyle={{
              fontWeight: "bold",
              color: "#fff",
            }}
            style={{ color: "#ccc", fontWeight: "bold" }}
          >
            Dashboard
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/ledger"
            activeStyle={{
              fontWeight: "bold",
              color: "#fff",
            }}
            style={{ color: "#ccc", fontWeight: "bold" }}
          >
            Ledger
          </NavLink>
        </div>
        <div>
          <NavLink to="/" style={{ color: "#ccc", fontWeight: "bold" }}>
            Logout
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Navbar;
