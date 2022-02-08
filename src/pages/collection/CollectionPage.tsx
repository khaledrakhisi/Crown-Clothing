import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import ICollection from "../../shared/interfaces/collection";
import { selectCollection } from "../../shared/redux/shop-data/shop-data-selector";
import CollectionItem from "../shop/components/CollectionItem";

import "./CollectionPage.scss";

interface IMatchName {
  collectionName: string;
}

interface OwnProps extends RouteComponentProps<IMatchName> {}

interface IProps extends OwnProps {
  collection: ICollection;
}

const collectionPage: React.FunctionComponent<IProps> = ({collection}) => {
  console.log(collection);

  return (
    <div className="collection-page">
      <div className="collection-page-header">
        <span className="collection-page-title">{""}</span>
      </div>
      {collection.items.map((item) => {
        return <CollectionItem key={item.id} {...item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: never, ownProps: OwnProps) => ({
    collection: selectCollection(ownProps.match.params.collectionName)(state),
});

export default connect(mapStateToProps)(collectionPage);
