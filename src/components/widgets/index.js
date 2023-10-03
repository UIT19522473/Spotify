import React, { useEffect, useState } from "react";
import "./widgets.css";
import apiClient from "../../spotify";
import WidgetCard from "./WidgetCard";

const Widgets = (props) => {
  const { artistID } = props;

  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    if (artistID) {
      apiClient
        .get(`/artists/${artistID}/related-artists`)
        .then((response) => {
          const a = response.data?.artists.slice(0, 3);
          setSimilar(a);
        })
        .catch((err) => {
          console.log(err);
        });

      apiClient
        .get(`/browse/featured-playlists`)
        .then((response) => {
          const a = response.data?.playlists.items.slice(0, 3);
          setFeatured(a);
        })
        .catch((err) => {
          console.log(err);
        });

      apiClient
        .get(`/browse/new-releases`)
        .then((response) => {
          const a = response.data?.albums.items.slice(0, 3);
          setNewRelease(a);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [artistID]);

  return (
    <div className="widgets-body">
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Made For You" featured={featured} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </div>
  );
};

export default Widgets;
