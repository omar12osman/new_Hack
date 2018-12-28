import React, { Component } from "react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
const SignUpPage = () => (
  <div>
    <h1>Sign in Page</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  UserName: "",
  Email: "",
  Password: "",
  error: null
};

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = () => {};
  onChange = () => {};

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="UserName"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full name "
        />
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpLink, SignUpForm };
