import { createSelector } from "reselect";

const selectShopData = (state) => state.shopData;
// const selectCollection = (state) => state.shopData.collections;

export const selectCollections = createSelector(
  [selectShopData],
  (shopData) => shopData.collections
);

export const selectCollection = collectionName => createSelector(
        [selectCollections],
        (collections) => collections.find(item => item.routeName === collectionName)
    );