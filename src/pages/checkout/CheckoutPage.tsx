import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "../../shared/components/Button";
import { ICartItem } from "../../shared/components/CartItem";
import { selectCartItems, selectCartItemsTotalPrice } from "../../shared/redux/cart/cart-selector";
import CheckoutItem from "./components/CheckoutItem";

import "./CheckoutPage.scss";

interface IProps {
  cartItems: Array<ICartItem>;
  cartItemsTotalPrice: Number,
}

const CheckoutPage: React.FunctionComponent<IProps> = ({ cartItems, cartItemsTotalPrice }) => {
  return (
    <div className="checkout-table">
      <div className="checkout-table-header">
        <div className="checkout-table-cell">product</div>
        <div className="checkout-table-cell">description</div>
        <div className="checkout-table-cell">Quantity</div>
        <div className="checkout-table-cell">Price</div>
        <div className="checkout-table-cell">Remove</div>
      </div>
      <div className="checkout-table-seperator-solid" />

      {cartItems.map((item, i) => {
        return i < cartItems.length - 1 ? (
          <React.Fragment key={item.id}>            
            <CheckoutItem {...item} />
            <div className="checkout-table-seperator-dotted" />
          </React.Fragment>
        ) : (
            <CheckoutItem key={item.id} {...item} />
        );
      })}

      <div className="checkout-table-seperator-solid" />

      <div className="checkout-table-total">TOTAL: ${cartItemsTotalPrice}</div>

      <div className="checkout-footer">
        <p>*Please use the following credit card for payments*</p>
        <p>4242 4242 4242 4242 -- Exp: 01/20 -- CVV: 123</p>
      </div>

      <div className="checkout-table-payment-button">
        <Button id="btn_payment"> Pay with </Button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotalPrice: selectCartItemsTotalPrice,
});

// const mapStateToProps = (state: any) => {
//     return {
//         cartItems: state.cart.cartItems,
//     }
// };

export default connect(mapStateToProps)(CheckoutPage);
