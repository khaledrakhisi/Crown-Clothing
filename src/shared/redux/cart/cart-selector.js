import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems,
);

export const selectCartItemsTotalQuantity = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce((total, currentItem)=> total + currentItem.quantity ,0)
);