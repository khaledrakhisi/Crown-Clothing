import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ICollection from "../../../shared/interfaces/collection";
import selectCollections from "../../../shared/redux/shop-data/shop-data-selector";
import CollectionPreview from "./CollectionPreview";

import "./CollectionOverview.scss";

interface IProps {
  collections: Array<ICollection>;
}

const CollectionOverview: React.FunctionComponent<IProps> = ({
  collections,
}) => {
  return (
    <div className="collection-overview">
      {collections.map((item) => {
        return <CollectionPreview key={item.id} {...item} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
