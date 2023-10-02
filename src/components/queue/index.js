import React from "react";
import "./queue.css";

const Queue = (props) => {
  const { tracks, setCurrentIndex } = props;

  const handleClickQueue = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="queue-container flex">
      <div className="queue">
        <p className="upNext"> UP Next</p>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              onClick={() => handleClickQueue(index)}
              key={index}
              className="queue-item"
            >
              <p className="track-name">{track?.track?.name}</p>
              <p>0:30</p>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
