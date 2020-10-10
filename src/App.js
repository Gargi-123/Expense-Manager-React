import React from 'react';
import styles from './App.module.css';
import Dashboard from "./components/dashboard/Dashboard"
import Login from "./components/authentication/login/Login";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <div>
        {/* <Dashboard/> */}
        <PublicRoutes />
    </div>
  );
}

export default App;
