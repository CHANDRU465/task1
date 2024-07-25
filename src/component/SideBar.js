import React from "react";
import OfficeLogo from "../assets/images/RadomeTechLogo.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img
          src={OfficeLogo}
          alt="OfficeLogo"
          style={{ width: '200px', height: '100px', objectFit: 'contain' }}
        />
      </div>
      <div className="menu-container">
        <ul className="menu">
          <li>Dashboard</li>
          <li>Upload Data</li>
          <li>Settings</li>   
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
