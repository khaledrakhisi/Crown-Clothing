import React from "react";

import { ICartItem } from "../../../shared/components/CartItem";

import "./CheckoutItem.scss";

const CheckoutItem: React.FunctionComponent<ICartItem> = ({imageUrl, name, quantity, price}) => {
  return (
    <div className="checkout-table-row">
      <div className="checkout-table-cell">
        <img className="checkout-table-cell-image" src={imageUrl} alt="" />
      </div>
      <div className="checkout-table-cell">{name}</div>
      <div className="checkout-table-cell"><span>&#10096;</span> {quantity} <span>&#10097;</span></div>
      <div className="checkout-table-cell">${price}</div>
      <div className="checkout-table-cell remove-button"><span>&#10006;</span></div>
    </div>
  );
};

export default CheckoutItem;