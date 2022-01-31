import SHOP_DATA from "../../data/shopdata";

const INITIAL_STATE = {
  items: [...SHOP_DATA],
};

const collectionReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {

    default:
      return currentState;
  }
};

export default collectionReducer;
