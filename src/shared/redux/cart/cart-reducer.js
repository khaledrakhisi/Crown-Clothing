import cartActionTypes from "./cart-types";

const INITIAL_STATE = {
    visible: false,
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.CART_TOGGLE_VISIBILITY:
      return {
        ...currentState,
        visible: !currentState.visible,
      };

    default:
      return currentState;
  }
};

export default cartReducer;
