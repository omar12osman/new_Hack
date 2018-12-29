import React, { Component } from "react";
import * as ROUTES from "../../constants/routes";
import { Link, withRouter } from "react-router-dom";
import "./SignUpForm.scss";
import { Firebasecontext, withFirebase } from "../Firebase";
const SignUpPage = () => (
  <div>
    <Firebasecontext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </Firebasecontext.Consumer>
  </div>
);

const INITIAL_STATE = {
  UserName: "",
  Email: "",
  Password: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };
  onChange = () => {};

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="UserName"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full name "
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />

        <input
          secureTextEntry
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <fieldset>
          <legend>Gender</legend>

          <label for="radio-choice-1">Male</label>
          <input
            type="radio"
            name="radio-choice"
            id="radio-choice-1"
            value="choice-1"
          />

          <label for="radio-choice-2">Female</label>
          <input
            type="radio"
            name="radio-choice"
            id="radio-choice-2"
            value="choice-2"
          />
        </fieldset>
        <div>
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label for="checkbox">I agree to Terms & Conditions</label>
          <button disabled={isInvalid} class="myButton" type="submit">
            submit
          </button>
        </div>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpLink, SignUpForm };
