import cartActionTypes from "./cart-types";

const INITIAL_STATE = {
  visible: false,
  cartItems: [],
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.CART_TOGGLE_VISIBILITY:
      return {
        ...currentState,
        visible: !currentState.visible,
      };

    case cartActionTypes.CART_ADD_ITEM:
      const existingCartItem = currentState.cartItems.find(
        (item) => item.id === action.payload.id
      );

      let newState = null;
      if (existingCartItem) {
        // existingCartItem.quantity++;
        newState = {
          ...currentState,
          cartItems: [
            ...currentState.cartItems.map((item) =>
              item.id === action.payload.id
                ? { ...action.payload, quantity: item.quantity + 1}
                : item
            ),
          ],
        };
      } else {
        newState = {
          ...currentState,
          cartItems: [...currentState.cartItems, action.payload],
        };
      }
      // console.log(newState);
      return newState;

    default:
      return currentState;
  }
};

export default cartReducer;
