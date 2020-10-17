import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { registerUser } from "../../../redux/authReducer/actions";
import { Green, Card, Input, Button, Div, Red } from "./../Styles";
import cStyles from "./../../../styles/common.module.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    const { name, email, password } = this.state;

    if (name.length < 4) {
      this.setState({
        error: "name should be atleast 4 characters",
      });
    } else if (email.split("@").length !== 2 || email.split(".").length !== 2) {
      this.setState({
        error: "Invalid Email",
      });
    } else if (password.length < 6) {
      this.setState({
        error: "password should be atleast 6 characters",
      });
    } else {
      this.setState({
        error: "",
      });

      const { registerUser, history } = this.props;
      const item = {
        id: uuidv4(),
        name,
        email,
        password,
      };

      registerUser(item);

      history.push("/dashboard");
    }
  };

  render() {
    const { email, password, name, error } = this.state;
    console.log(this.state);
    return (
      <>
        <Green>
          <Card className={cStyles.alignCenter}>
            <div className={`${cStyles.fontBold} ${cStyles.fontSize30}`}>
              Register
            </div>
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
              />
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
              <Button onClick={this.handleRegister}>Register</Button>
            </div>
            <Red>{error && error}</Red>

            <div>
              Have an account ?{" "}
              <Link to="/" style={{ color: "#00bc2a" }}>
                Login
              </Link>
            </div>
          </Card>
        </Green>
        <Div></Div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  navigate: state.auth.navigate,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (payload) => dispatch(registerUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
