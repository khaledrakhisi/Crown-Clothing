import { createSelector } from "reselect";

const selectShopData = (state) => state.shopData;
// const selectCollection = (state) => state.shopData.collections;

export const selectCollections = createSelector(
  [selectShopData],
  (shopData) => shopData.collections
);

export const selectCollection = c => createSelector(
        [selectCollections],
        (collections) => {let r = collections[0];
        console.log(r);
        return r;  }
    );