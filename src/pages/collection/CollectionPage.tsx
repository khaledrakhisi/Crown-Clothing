import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import ICollection from "../../shared/interfaces/collection";
import { selectCollection } from "../../shared/redux/shop-data/shop-data-selector";

import "./CollectionPage.scss";

interface IMatchName {
  collectionName: string;
}

interface OwnProps extends RouteComponentProps<IMatchName> {}

interface IProps extends OwnProps {
  collection: ICollection;
}

const collectionPage: React.FunctionComponent<IProps> = ({collection}) => {
//   console.log(collection);

  return (
    <div className="collection-page">
      <div className="collection-page-header">
        <span className="collection-page-title">{""}</span>
      </div>
      {/* {collection.items.map((item) => {
        return <CollectionItem key={item.id} {...item} />;
      })} */}
    </div>
  );
};

const mapStateToProps: MapStateToProps<any, OwnProps> = (state: any, ownProps: OwnProps) => createStructuredSelector({
    collection: selectCollection,
  });

export default connect(mapStateToProps)(collectionPage);
