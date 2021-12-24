import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../../shared/redux/cart/cart-actions";
import Button from "../../../shared/components/Button";
import { ICartItem } from "../../../shared/components/CartItem";

import "./CollectionItem.scss";

export interface ICollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface IProps extends ICollectionItem{
  addItem: (cartItem: ICartItem)=>any;
}

const CollectionItem: React.FunctionComponent<IProps> = ({ id, name, imageUrl, price, addItem }) => {

    return (
      <React.Fragment>
        <div className="collection-item">
          <div className="image" style={{
              backgroundImage: `url("${imageUrl}")`,
          }} >          
          </div>
          <div className="collection-footer">
              <span className="name">{name}</span>
              <span className="price">${price}</span>
          </div>

          <Button id="btn_addToCart" inverted onClick={() => addItem({ id, name, imageUrl, price, quantity: 1})}>add to cart</Button>
        </div>        
      </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (cartItem: ICollectionItem) => dispatch(addItemToCart(cartItem)),
})


export default connect(null, mapDispatchToProps)(CollectionItem);
