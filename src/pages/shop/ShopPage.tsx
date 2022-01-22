import React from "react";

import SHOP_DATA from "../../shared/data/shopdata";
import ICollection from "../../shared/interfaces/collection";
import CollectionPreview from "./components/CollectionPreview";

interface IProps {
  
}
interface IState {
  collections: Array<ICollection>;
}

class ShopPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
      return <div className="shop-page">
          {this.state.collections.map(({id, ...otherProps})=>{
              return <CollectionPreview key={id} id={id} {...otherProps}/>
          })}
      </div>
  }
        
}

export default ShopPage;
