import { connect } from "react-redux";

import Button from "./Button";
import CartItem, { ICartItem } from "./CartItem";

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

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(CartDropdown);
