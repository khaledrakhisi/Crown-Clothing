import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import firebase from "firebase/compat/app";

import "./Header.scss";
import { auth } from "../../firebase/firebase.utils";

export interface IProps {
  currentLoggedinUser: firebase.User | null;
}

const Header: React.FunctionComponent<IProps> = ({ currentLoggedinUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          shop
        </Link>

        <Link className="option" to="/contact">
          contact
        </Link>

        {currentLoggedinUser ? (
          <div className="option" onClick={()=>auth.signOut()}>{`sign out ${currentLoggedinUser.displayName}`}</div>
        ) : (
          <Link className="option" to="/signin">
            sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
