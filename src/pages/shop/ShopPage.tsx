import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import CollectionOverview from "./components/CollectionOverview";
import CategoryPage from "../category/CategoryPage";

interface IProps extends RouteComponentProps {}

const ShopPage: React.FunctionComponent<IProps> = ({match}) => {
  console.log(match);
  
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryName`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
