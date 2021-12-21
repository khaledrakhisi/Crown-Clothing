import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../utility/firebase.utils";
import { IUser } from "../interfaces/user";
import { connect } from "react-redux";
import CardIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

import "./Header.scss";

export interface IProps {
  currentLoggedinUser: IUser | null;
  isCartVisible: Boolean;
}

const Header: React.FunctionComponent<IProps> = ({ currentLoggedinUser, isCartVisible }) => {

  // const eh_cartIcon_Click = () => {
  //   isCartVisible = !isCartVisible;
  //   console.log(isCartVisible);
    
  // }

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
          <div className="option" onClick={()=>{
            auth.signOut();
            console.log("sign outtttt");
            }
          }>{`sign out ${currentLoggedinUser.displayName}`}</div>
        ) : (
          <Link className="option" to="/signin">
            sign in
          </Link>          
        )}

        <CardIcon/>                
        
      </div>     
      {
        isCartVisible ? <CartDropdown /> : null
      }       

    </div>
  );
};

const mapStateToProps = (state: any) => {
  // console.log(">>", state);
  
  return {
    currentLoggedinUser : state.user.currentUser,
    isCartVisible: state.cart.visible,
  }
};

const mappedComponent = connect(mapStateToProps);

export default mappedComponent(Header);
