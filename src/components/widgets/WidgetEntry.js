import React from "react";
import "./widgetEntry.css";

const WidgetEntry = (props) => {
  const { title, subtitle, image } = props;
  return (
    <div className="entry-body">
      <img src={image} alt="logo" className="entry-image" />
      <div className="entry-right-body">
        <div className="entry-title">{title}</div>
        <div className="entry-subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default WidgetEntry;
