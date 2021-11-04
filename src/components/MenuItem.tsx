import React from "react";

import "./MenuItem.scss";

interface MenuItems {
  title: string;
  subtitle: string;
  imageUrl: string;
  size?: string;
}

function MenuItem(props: MenuItems) {
  return (
    <div className={`${props.size} menu-item`}>
      <div
        className="background-pic"
        style={{
          backgroundImage: `url("${props.imageUrl}")`,
        }}
      >j</div>
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">{props.subtitle}</span>
      </div>
    </div>
  );
}

export default MenuItem;
