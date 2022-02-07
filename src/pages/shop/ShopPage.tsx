import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import CollectionOverview from "./components/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";

interface IProps extends RouteComponentProps {}

const ShopPage: React.FunctionComponent<IProps> = ({match}) => {
  
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionName`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
