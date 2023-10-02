import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./SidebarButton";
import { MdSpaceDashboard, MdFavorite, MdLibraryMusic } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import apiClient from "../../spotify";

const Sidebar = () => {
  const [image, setImage] = useState(
    "https://thegioionline.net/wp-content/uploads/2023/04/anh-gai-xinh-viet-nam-de-thuong-600x600-1.jpeg"
  );

  // useEffect(() => {
  //   // apiClient.get("me").then((response) => {
  //   //   setImage(response.data.images[0].url);
  //   //   console.log(response);
  //   // });
  //   const fetchData = async () => {
  //     const response = await apiClient.get("me");
  //     if(response){
  //       setImage(response)
  //     }
  //     console.log(response);
  //   };

  //     fetchData()

  // }, []);
  return (
    <div className="sidebar-container">
      <img className="profile-img" src={image} alt="logo" />
      <div className="">
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<MdLibraryMusic />} />
      </div>
      <SidebarButton title="Sign Out" to="/" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
