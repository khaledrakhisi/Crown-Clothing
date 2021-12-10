import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../utility/firebase.utils";
import { IUser } from "../interfaces/user";
import { connect } from "react-redux";

import "./Header.scss";

export interface IProps {
  currentLoggedinUser: IUser | null;
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
          <div className="option" onClick={()=>{auth.signOut();console.log("sign outtttt");}
          }>{`sign out ${currentLoggedinUser.displayName}`}</div>
        ) : (
          <Link className="option" to="/signin">
            sign in
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  // console.log(">>", state);
  
  return {
    currentLoggedinUser : state.user.currentUser,
  }
};

export default connect(mapStateToProps)(Header);
