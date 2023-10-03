import React, { useState } from "react";
import "./sidebar.css";
import SidebarButton from "./SidebarButton";
// import { MdSpaceDashboard, MdFavorite, MdLibraryMusic } from "react-icons/md";
// import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";

import { MdFavorite, MdLibraryMusic } from "react-icons/md";
import { FaPlay, FaSignOutAlt } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(
    "https://thegioionline.net/wp-content/uploads/2023/04/anh-gai-xinh-viet-nam-de-thuong-600x600-1.jpeg"
  );

  const handleSignOut = () => {
    // console.log("hello");
    Cookies.set("token", ""); // Lưu token vào cookie
    navigate("/login");
    window.location.reload();
  };
  return (
    <div className="sidebar-container">
      <img className="profile-img" src={image} alt="logo" />
      <div className="">
        {/* <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} /> */}
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<MdLibraryMusic />} />
      </div>
      <button onClick={handleSignOut} className="btn-signOut">
        <FaSignOutAlt size={20} />
        <p className="btn-signOut-title">Sign Out</p>
      </button>
    </div>
  );
};

export default Sidebar;
