import React from "react";

import { ICollectionItem } from "../../pages/shop/components/CollectionItem";

import "./CartItem.scss";

export interface ICartItem extends ICollectionItem {
  quantity: number;
}

const CartItem: React.FunctionComponent<ICartItem> = ({id, name, imageUrl, price, quantity}) => {
  return (
    <div className="cart-item">
      <img className="cart-thumbnail" src={imageUrl} alt="" />
      <div className="cart-item-info">
        <span className="cart-item-title">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
