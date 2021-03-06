import React from "react";
import { connect } from "react-redux";

import { ICartItem } from "../../../shared/components/CartItem";
import { updateQuantity, DeleteItemFromCart } from "../../../shared/redux/cart/cart-actions";

import "./CheckoutItem.scss";

interface ICheckoutItem extends ICartItem{
    deleteItem: (item_id: number) => void;
    updateQuantity: (item_id: number, item_quantity: number, update_number: number) => void;    
}

const CheckoutItem: React.FunctionComponent<ICheckoutItem> = ({id, imageUrl, name, quantity, price, deleteItem, updateQuantity}) => {
  return (
    <div className="checkout-table-row">
      <div className="checkout-table-cell">
        <img className="checkout-table-cell-image" src={imageUrl} alt="" />
      </div>
      <div className="checkout-table-cell">{name}</div>
      <div className="checkout-table-cell  quantity">
          <div className="decrease" onClick={()=>updateQuantity(id, quantity, -1)}>&#10096;</div>
          <span>{quantity}</span>
          <div className="increase" onClick={()=>updateQuantity(id, quantity, 1)}>&#10097;</div>
      </div>
      <div className="checkout-table-cell">${price}</div>
      <div className="checkout-table-cell" onClick={()=>{deleteItem(id)}}><span className="delete-button">&#10006;</span></div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) =>{
    return {
        deleteItem: (item_id: number) => dispatch(DeleteItemFromCart(item_id)),
        updateQuantity: (item_id: number, item_quantity: number, update_number: number) => dispatch(updateQuantity(item_id, item_quantity, update_number)),        
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
