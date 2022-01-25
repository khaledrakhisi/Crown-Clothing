import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import Button from "./Button";
import CartItem, { ICartItem } from "./CartItem";
import { selectCartItems } from "../redux/cart/cart-selector";
import { toggleCartVisibility } from "../redux/cart/cart-actions";

import "./CartDropdown.scss";


interface IProps {
  cartItems: Array<ICartItem>;
  history: any;
  dispatch: any,
}

const CartDropdown: React.FunctionComponent<IProps> = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length
        ? cartItems.map((item) => <CartItem key={item.id} {...item} />)
        : <span className="empty-message">Cart is empty</span>}
    </div>
    <Button isBlueStyle id="btn_checkout" onClick={()=>{
      history.push("/checkout");
      dispatch(toggleCartVisibility());
      }}>
      checkout
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
