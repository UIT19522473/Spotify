import React from "react";
import "./login.css";
import { loginEndpoint } from "../../spotify";

const Login = () => {
  return (
    <div className="login-page">
      <img
        className="login-logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="login"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
};

export default Login;
