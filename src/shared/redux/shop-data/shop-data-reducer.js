import SHOP_DATA from "../../data/shopdata";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopDataReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {

    default:
      return currentState;
  }
};

export default shopDataReducer;
