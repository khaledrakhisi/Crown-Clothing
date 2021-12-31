import { connect } from "react-redux";

import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { toggleCartVisibility } from "../redux/cart/cart-actions";
import { ICartItem } from "./CartItem";

import "./CartIcon.scss";

interface IProps{
  cartVisibility: ()=>void,
  // cartItems: Array<ICartItem>,
  itemsTotalQuantity: number,
}

const CardIcon: React.FunctionComponent<IProps> = ({cartVisibility, itemsTotalQuantity}) => (
  <div className="cart-icon" onClick={cartVisibility}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{itemsTotalQuantity}</span>
  </div>
);

const mapDispatchToProps = (dispatch: any) => ({
  cartVisibility: () => dispatch(toggleCartVisibility()),
});

const mapStateToProps = (state: any) => {
  const items: Array<ICartItem>= state.cart.cartItems;
  return {
    itemsTotalQuantity: items.reduce((total, currentItem)=> total + currentItem.quantity ,0),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
