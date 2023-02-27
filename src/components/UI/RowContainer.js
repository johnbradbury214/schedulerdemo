import React from "react";

import "./RowContainer.css";

const RowContainer = (props) => {
  const classes = "row-container " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default RowContainer;
