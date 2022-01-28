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
                ? {
                    ...action.payload,
                    quantity: item.quantity + action.payload.quantity,
                  }
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

    case cartActionTypes.CART_DELETE_ITEM:
      let filteredState = {
        ...currentState,
        cartItems: currentState.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };

      // console.log(filteredState);
      return filteredState;

    case cartActionTypes.CART_UPDATE_QUANTITY:      
      const newCartItems = currentState.cartItems.map((item) =>
        item.id === action.payload.item_id
          ? {
              ...item,
              quantity:
                action.payload.item_quantity + action.payload.update_number !== 0
                  ? action.payload.item_quantity + action.payload.update_number
                  : action.payload.item_quantity,
            }
          : item
      );
      currentState = {
        ...currentState,
        cartItems: newCartItems,
      };
      return currentState;

    default:
      return currentState;
  }
};

export default cartReducer;
