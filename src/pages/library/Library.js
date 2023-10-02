import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";

import "../library/library.css";
import { IconContext } from "react-icons";

import { AiFillPlayCircle } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const Library = () => {
  const navigate = useNavigate();
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchPlayList = async () => {
      const response = await APIKit.get("users/me/playlists");

      if (response) {
        setPlaylists(response.data.items);
      }
    };
    fetchPlayList();
  }, []);

  const handlePlayList = (id) => {
    navigate("/player", { state: { id: id } });
  };
  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((item, index) => (
          <div
            className="playlist-card"
            key={item?.id}
            onClick={() => handlePlayList(item?.id)}
          >
            <img
              src={item?.images[0].url}
              className="playlist-image"
              alt="logo"
            />
            <p className="playlist-title">{item?.name}</p>
            <p className="playlist-subtitle">{item?.tracks.total} Songs</p>

            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
