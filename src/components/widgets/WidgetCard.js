import React from "react";
import "./widgetCard.css";
import WidgetEntry from "./WidgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

const WidgetCard = (props) => {
  const { title, similar, featured, newRelease } = props;
  return (
    <div className="widgetcard-body">
      <p className="widget-title">{title}</p>
      {similar ? (
        similar.map((artist, index) => (
          <WidgetEntry
            key={index}
            title={artist?.name}
            subtitle={artist?.followers?.total + " followers"}
            image={artist?.images[2]?.url}
          />
        ))
      ) : featured ? (
        featured.map((playlist, index) => (
          <WidgetEntry
            key={index}
            title={playlist?.name}
            subtitle={playlist?.tracks?.total + " Songs"}
            image={playlist?.images[0]?.url}
          />
        ))
      ) : newRelease ? (
        newRelease.map((album, index) => (
          <WidgetEntry
            key={index}
            title={album?.name}
            subtitle={album?.artists[0]?.name}
            image={album?.images[2]?.url}
          />
        ))
      ) : (
        <></>
      )}
      <div className="widget-fade">
        <div className="fade-button">
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
