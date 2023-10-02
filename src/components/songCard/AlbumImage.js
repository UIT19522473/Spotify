import React from "react";
import "./albumImage.css";

const AlbumImage = (props) => {
  const { url } = props;
  return (
    <div className="albumImage flex">
      <img className="albumImage-art" src={url} alt="logo" />
      <div className="albumImage-shadow">
        <img className="albumImage-shadow" src={url} alt="logo" />
      </div>
    </div>
  );
};

export default AlbumImage;
