import React from "react";

import ICollection from "../../../shared/interfaces/collection";
import CollectionItem from "./CollectionItem";

import "./CollectionPreview.scss";

const CollectionPreview: React.FunctionComponent<ICollection> = ({id, title, items}) => {
  return (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map(({id, ...others}) => { return <CollectionItem key={id} id={id} {...others}/> })}
        </div>
      </div>
  );
};

export default CollectionPreview;
