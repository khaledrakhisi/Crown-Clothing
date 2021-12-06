import React from "react";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const Signin_Signup: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className="signin-signup-page">
        <div className="signin-col">
          <Signin />
        </div>
        <div className="signup-col">
          <Signup />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin_Signup;
