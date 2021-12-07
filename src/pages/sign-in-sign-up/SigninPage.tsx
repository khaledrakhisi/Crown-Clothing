import React from "react";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

import "./SigninPage.scss"

const Signin_Signup: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className="signin-signup-page">
        
          <Signin />
          <Signup />
        
      </div>
    </React.Fragment>
  );
};

export default Signin_Signup;
