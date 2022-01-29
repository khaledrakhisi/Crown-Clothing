import React from "react";
import { createStructuredSelector } from "reselect";

import MenuItem from "./MenuItem";
import ISection from "../interfaces/section";

import "./Directory.scss";
import selectDirectorySections from "../redux/directory/directory-selector";
import { connect } from "react-redux";

interface IProps {
  sections: Array<ISection>;
}

// interface IState {
//     sections: Array<ISection>;
// }

const Directory: React.FunctionComponent<IProps> = ({sections}) => {

    return (
      <div className="directory-menu">
        {sections.map(({id, ...otherSectionProps}) => {
          return <MenuItem id={id} key={id} {...otherSectionProps} />;
        })}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});


export default connect(mapStateToProps)(Directory);