import { createSelector } from "reselect";

const selectShopData = (state) => state.shopData;

const selectCollections = createSelector(
    [selectShopData],
    shopData => shopData.collections,
);

export default selectCollections;