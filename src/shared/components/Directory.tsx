import React from "react";

import MenuItem from "./MenuItem";
import ISection from "../interfaces/section";
import SECTIONS_DATA from "../data/sectionsdata";

import "./Directory.scss";

interface IProps {
  //code related to your props goes here
}

interface IState {
    sections: Array<ISection>;
}

class Directory extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA,
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