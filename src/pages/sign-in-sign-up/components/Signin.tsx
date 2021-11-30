import React from "react";
import Button from "../../../shared/components/Button";
import FormInput from "../../../shared/components/FormInput";
import { signInWithGoogle } from "../../../firebase/firebase.utils";

import "./Signin.scss";

interface IProps {}
interface IState {
  email: string;
  password: string;
}

class Signin extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  eh_inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    // console.log(name);

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  eh_submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.eh_submit}>
          <FormInput
            id="txt_email"
            label="email"
            name="email"
            type="email"
            onChange={this.eh_inputChange}
            value={this.state.email}
            required
          />
          <FormInput
            id="txt_password"
            label="password"
            name="password"
            type="password"
            onChange={this.eh_inputChange}
            value={this.state.password}
            required
          />

          <div className="buttons"> 
            <Button id="btn_signin" type="submit">              
              sign in
            </Button>

            <Button
              id="btn_signin"
              type="submit"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >              
              sign in with google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
