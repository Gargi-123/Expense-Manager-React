import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Green, Card, Input, Button, Div } from "./Styles";
import cStyles from "./../../../styles/common.module.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <Green>
          <Card className={cStyles.alignCenter}>
            <div className={`${cStyles.fontBold} ${cStyles.fontSize30}`}>
              Log In
            </div>
            <div>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Input
                type="text"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Button>LOGIN</Button>
            </div>
            <div>
              Don't have an account ?{" "}
              <Link to="/register" style={{ color: "#00bc2a" }}>
                Register
              </Link>
            </div>
          </Card>
        </Green>
        <Div></Div>
      </>
    );
  }
}

export default Login;
