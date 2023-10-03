import React from "react";
import "./controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

const Controls = (props) => {
  const { isPlaying, setIsPlaying, handleNext, handlePrev } = props;
  return (
    <IconContext.Provider value={{ size: "35px", color: "#c4d0e3" }}>
      <div className="controls-wrapper">
        <div className="action-btn" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={isPlaying ? "play-pause-btn active" : "play-pause-btn"}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div className="action-btn" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Controls;
