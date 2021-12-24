import cartActionTypes from "./cart-types"

export const toggleCartVisibility = () => {
    return {
        type: cartActionTypes.CART_TOGGLE_VISIBILITY,
        // payload: visible
    }
}

export const addItemToCart = cartItem => {
    // console.log(cartItem);
    return {
        type: cartActionTypes.CART_ADD_ITEM,
        payload: cartItem
    }
}