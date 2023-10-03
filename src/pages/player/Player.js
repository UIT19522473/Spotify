import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "../player/player.css";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";
import AudioPlayer from "../../components/audioPlayer";
import Widgets from "../../components/widgets";

const Player = (props) => {
  const location = useLocation();
  // const { id } = location.state;
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get(`playlists/${location.state?.id}/tracks`)
        .then((response) => {
          setTracks(
            response?.data?.items.filter((item) => item?.track?.preview_url)
          );
          setCurrentTrack(response.data.items[0].track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        {tracks.length > 0 && (
          <>
            <AudioPlayer
              currentTrack={currentTrack}
              // isPlaying={true}
              total={tracks}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
            <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
          </>
        )}
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
};

export default Player;
