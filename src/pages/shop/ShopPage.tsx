import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ICollection from "../../shared/interfaces/collection";
import selectCollectionItems from "../../shared/redux/collection/collection-selector";
import CollectionPreview from "./components/CollectionPreview";

interface IProps {
  collectionItems: Array<ICollection>;
}

const ShopPage: React.FunctionComponent<IProps> = ({ collectionItems }) => {
  return (
    <div className="shop-page">
      {collectionItems.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} id={id} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collectionItems: selectCollectionItems,
})

export default connect(mapStateToProps)(ShopPage);
