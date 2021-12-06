import React from "react";
import Button from "../../../shared/components/Button";
import FormInput from "../../../shared/components/FormInput";
import { auth, createUserProfileDocument } from "../../../shared/utility/firebase.utils";

import "./Signup.scss";

interface IProps {}
interface IState {
  email: string;
  displayName: string;
  password: string;
  confirmPassword: string;
}

class Signup extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      email: "",
      displayName: "",
      password: "",
      confirmPassword: "",
    };
  }

  eh_inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

    const {name, value} = e.currentTarget;

    this.setState({
        ...this.state,
        [name]: value
      });
  }

  eh_submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {email, displayName, password, confirmPassword} = this.state;

    if(password !== confirmPassword){
        alert("passwords arn't match")
        return;
    }

    try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);

        await createUserProfileDocument(user, displayName);

        this.setState({
            email: "",
            displayName: "",
            password: "",
            confirmPassword: "",
          });

    } catch (error) {
        console.error(error);
        
    }    
  };

  render() {
    return (
      <div className="signup">
        <div className="title">I don't have an account</div>
        <span>Sign up with email and password</span>

        <form className="signup-form" onSubmit={this.eh_submit}>
          <FormInput
            id="txt_email"
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.eh_inputChange}
          />

          <FormInput
            id="txt_displayname"
            label="Display Name"
            name="displayname"
            type="text"
            value={this.state.displayName}
            onChange={this.eh_inputChange}
          />

          <FormInput
            id="txt_password"
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.eh_inputChange}
          />

          <FormInput
            id="txt_confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.eh_inputChange}
          />

          <Button id="btn_submit" type="submit">sign up</Button>
        </form>
      </div>
    );
  }
}

export default Signup;
