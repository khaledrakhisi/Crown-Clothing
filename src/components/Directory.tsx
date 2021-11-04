import React from "react";

import "./Directory.scss";
import MenuItem from "./MenuItem";

interface ComProps {
  //code related to your props goes here
}

interface ComState {
  sections: {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: string;
  }[];
}
// interface Sections extends Array<ComponentState>{
//     sections: ComponentState[],
// }

class Directory extends React.Component<ComProps, ComState> {
  constructor(props: any) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "men",
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
        {this.state.sections.map(({title, imageUrl, id, size}) => {
          return <MenuItem key={id} title={title} subtitle={"SHOP NOW"} imageUrl={imageUrl} size={size} />;
        })}
      </div>
    );
  }
}


export default Directory;