import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import Button from "./Button";
import CartItem, { ICartItem } from "./CartItem";
import { selectCartItems } from "../redux/cart/cart-selector";

import "./CartDropdown.scss";

interface IProps {
  cartItems: Array<ICartItem>;
  history: any;
}

const CartDropdown: React.FunctionComponent<IProps> = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length
        ? cartItems.map((item) => <CartItem key={item.id} {...item} />)
        : <span className="empty-message">Cart is empty</span>}
    </div>
    <Button isBlueStyle id="btn_checkout" onClick={()=>{history.push("/checkout")}}>
      checkout
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
