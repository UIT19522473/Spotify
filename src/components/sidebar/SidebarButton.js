import React from "react";
import "./sidebarButton.css";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons/lib";

const SidebarButton = (props) => {
  const { title, to, icon } = props;

  const location = useLocation();
  const isActive = location.pathname === to;

  const btnClass = isActive ? "btn-body active" : "btn-body";
  return (
    <Link to={to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {icon}
          <p className="btn-title">{title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
