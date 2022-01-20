import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "./Button";
import CartItem, { ICartItem } from "./CartItem";
import { selectCartItems } from "../redux/cart/cart-selector";

import "./CartDropdown.scss";

interface IProps {
  cartItems: Array<ICartItem>;
}

const CartDropdown: React.FunctionComponent<IProps> = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
    <Button isBlueStyle id="btn_checkout">checkout</Button>
  </div>
);

const mapStateToProps = createStructuredSelector({  
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
