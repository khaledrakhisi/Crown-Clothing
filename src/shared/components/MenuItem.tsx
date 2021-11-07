import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ISection from "../interfaces/section";

import "./MenuItem.scss";

const MenuItem: React.FunctionComponent<ISection & RouteComponentProps> = ({size, imageUrl, title, subtitle, linkUrl, history, match}) => {
  return (
    <div className={`${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
      <div
        className="background-pic"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
