import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import selectCollectionItems from "../../shared/redux/collection/collection-selector";
import CollectionItem, { ICollectionItem } from "../shop/components/CollectionItem";

import "./CollectionOverviewPage.scss";

interface IProps {
  collectionItems: Array<ICollectionItem>;
}

const CollectionOverviewPage: React.FunctionComponent<IProps> = ({
  collectionItems,
}) => {
  return (
    <div className="collection-overview">
      <div className="collection-overview-header">
        <span className="collection-overview-title">hats</span>
      </div>

      <div className="collection-items">
        {collectionItems.map((item)=>{
            return <CollectionItem key={item.id} {...item}/>
        })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collectionItems: selectCollectionItems,
});

export default connect(mapStateToProps)(CollectionOverviewPage);
