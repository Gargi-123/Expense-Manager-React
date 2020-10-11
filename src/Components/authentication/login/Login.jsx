import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "./../../../redux/authReducer/actions";
import { loadData } from "./../../../redux/localStorage";
import { Green, Card, Input, Button, Div , Red} from "./../Styles";
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

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(this.props);
    const loadedData = loadData("auth");
    const { id } = loadedData;

    const item = {
      id,
      email,
      password,
    };
    const { loginUser, isLoggedIn, history } = this.props;
    loginUser(item);

    if (isLoggedIn) {
      history.push("/dashboard");
    }
  };

  render() {
    const { email, password } = this.state;
    const { authResponse } = this.props;

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
              <Button onClick={this.handleLogin}>LOGIN</Button>
            </div>
            <Red>{authResponse && authResponse}</Red>
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  authResponse: state.auth.authResponse,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (payload) => dispatch(loginUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
