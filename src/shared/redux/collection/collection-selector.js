import { createSelector } from "reselect";

const selectCollection = (state) => state.collection;

const selectCollectionItems = createSelector(
    [selectCollection],
    collection => collection.items,
);

export default selectCollectionItems;