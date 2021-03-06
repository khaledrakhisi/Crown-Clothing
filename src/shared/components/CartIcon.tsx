import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { toggleCartVisibility } from "../redux/cart/cart-actions";
import { selectCartItemsTotalQuantity } from "../redux/cart/cart-selector";

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

const mapStateToProps = createStructuredSelector({
  // const items: Array<ICartItem>= state.cart.cartItems;
  // console.log("im am being called");
  
    itemsTotalQuantity: selectCartItemsTotalQuantity,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
