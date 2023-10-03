import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "../library/Library";
// import Feed from "../feed/Feed";
// import Trending from "../trending/Trending";
import Player from "../player/Player";
import Favorites from "../favorites/Favorites";

import "./home.css";
import Sidebar from "../../components/sidebar";
import Login from "../auth/Login";
import { setClientToken } from "../../spotify";
import Cookies from "js-cookie";

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const cookieToken = Cookies.get("token"); // Lấy token từ cookie
    const hash = window.location.hash;
    // console.log(hash);
    window.location.hash = "";

    if (!cookieToken && hash) {
      // const expires = hash.split("&")[2].split("=")[1];
      const _token = hash.split("&")[0].split("=")[1];

      const expirationDate = new Date(); // Lấy thời gian hiện tại
      expirationDate.setSeconds(expirationDate.getSeconds() + 1200); // Thêm thời gian hết hạn

      Cookies.set("token", _token, { expires: expirationDate }); // Lưu token vào cookie
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(cookieToken); // Sử dụng token từ cookie
      setClientToken(cookieToken);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <BrowserRouter>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          {/* <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} /> */}
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Home;
