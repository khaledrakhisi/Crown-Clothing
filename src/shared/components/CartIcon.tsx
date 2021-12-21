import { connect } from "react-redux";

import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { toggleCartVisibility } from "../redux/cart/cart-actions";

import "./CartIcon.scss";

export interface IProps{
  cartVisibility: ()=>void;
}

const CardIcon: React.FunctionComponent<IProps> = ({cartVisibility}) => (
  <div className="cart-icon" onClick={cartVisibility}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch: any) => ({
  cartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(null, mapDispatchToProps)(CardIcon);
