
import Button from "./Button";
import "./CartDropdown.scss";

const CartDropdown: React.FunctionComponent = () => (
    <div className="cart-dropdown">

        <div className="cart-items">
            
        </div>

        <Button isBlueStyle id="btn_checkout">checkout</Button>
    </div>
)

export default CartDropdown;