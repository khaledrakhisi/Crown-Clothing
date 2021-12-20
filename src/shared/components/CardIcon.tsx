import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import "./CardIcon.scss";

const CardIcon = () => (
  <div className="cart-icon">
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CardIcon;
