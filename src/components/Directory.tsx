import React from "react";

import MenuItem from "./MenuItem";
import ISection from "../interfaces/section";

import "./Directory.scss";

interface IProps {
  //code related to your props goes here
}

interface IState {
    sections: Array<ISection>;
}

class Directory extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          subtitle: "SHOP NOW",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          subtitle: "SHOP NOW",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          subtitle: "SHOP NOW",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "women",
          subtitle: "SHOP NOW",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "men",
          subtitle: "SHOP NOW",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({id, ...otherSectionProps}) => {
          return <MenuItem id={id} key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}


export default Directory;