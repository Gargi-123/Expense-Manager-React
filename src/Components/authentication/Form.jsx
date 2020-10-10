import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { registerUser } from "../../redux/authReducer/actions";
import { Green, Card, Input, Button, Div } from "./Styles";
import cStyles from "./../../styles/common.module.css";

class Form extends Component {
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

  handleRegister = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { registerUser } = this.props;

    const item = {
      id: uuidv4(),
      email,
      password,
    };

    registerUser(item);
  };

  render() {
    const { email, password } = this.state;
    const { Register } = this.props;
    console.log(this.props);

    return (
      <>
        <Green>
          <Card className={cStyles.alignCenter}>
            <div className={`${cStyles.fontBold} ${cStyles.fontSize30}`}>
              {Register ? "Register" : "Log In"}
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
              {Register ? (
                <Button onClick={this.handleRegister}>REGISTER</Button>
              ) : (
                <Button>LOGIN</Button>
              )}
            </div>

            {Register ? (
              <div>
                Don't have an account ?{" "}
                <Link to="/" style={{ color: "#00bc2a" }}>
                  Sign In
                </Link>
              </div>
            ) : (
              <div>
                Have an account ?{" "}
                <Link to="/register" style={{ color: "#00bc2a" }}>
                  Register
                </Link>
              </div>
            )}
          </Card>
        </Green>
        <Div></Div>
      </>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (payload) => dispatch(registerUser(payload)),
});

export default connect(null, mapDispatchToProps)(Form);
