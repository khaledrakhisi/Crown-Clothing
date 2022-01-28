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

export const DeleteItemFromCart = item_id => {
    return {
        type: cartActionTypes.CART_DELETE_ITEM,
        payload: item_id,
    }
}

export const updateQuantity = (item_id, item_quantity, update_number) => {
    return {
        type: cartActionTypes.CART_UPDATE_QUANTITY,
        payload: {item_id, item_quantity, update_number},
    }
}