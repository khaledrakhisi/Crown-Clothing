import cartActionTypes from "./cart-types"

export const toggleCartVisibility = () => {
    return {
        type: cartActionTypes.CART_TOGGLE_VISIBILITY,
        // payload: visible,
    }
}