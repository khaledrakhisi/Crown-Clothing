import React from "react";
import ICollectionItem from "../../../shared/interfaces/collectionItems";

import "./CollectionItem.scss";

const CollectionItem: React.FunctionComponent<ICollectionItem> = ({ name, imageUrl, price }) => {
  
    return (
      <React.Fragment>
        <div className="collection-item">
          <div className="image" style={{
              backgroundImage: `url("${imageUrl}")`,
          }} />                  
          <div className="collection-footer">
              <span className="name">{name}</span>
              <span className="price">{price}</span>
          </div>
        </div>        
      </React.Fragment>
    );
}

export default CollectionItem;
