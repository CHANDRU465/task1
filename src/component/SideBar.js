import React from "react";
import OfficeLogo from "../assets/images/RadomeTechLogo.png";
import { Link, useLocation } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { RiTaskLine } from "react-icons/ri";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa6";

const SideBar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img
          src={OfficeLogo}
          alt="OfficeLogo"
          style={{ width: "150px", height: "100px", objectFit: "contain" }}
        />
      </div>
      <div className="menu-container">
        <Link
          to="/"
          className={
            location.pathname === "/dashboard"
              ? "menu-link-active"
              : "menu-link-inactive"
          }
        >
          <CiHome style={{ marginRight: "10px" }} />
          Dashboard
        </Link>
        <Link
          to="/form"
          className={
            location.pathname === "/form"
              ? "menu-link-active"
              : "menu-link-inactive"
          }
        >
          <FaWpforms style={{ marginRight: "10px" }} />
          Form
        </Link>

        <Link
          to="/task"
          className={
            location.pathname === "/task"
              ? "menu-link-active"
              : "menu-link-inactive"
          }
        >
          <RiTaskLine style={{ marginRight: "10px" }} />
          Task
        </Link>
        <Link
          to="/notes"
          className={
            location.pathname === "/notes"
              ? "menu-link-active"
              : "menu-link-inactive"
          }
        >
          <FaRegNoteSticky style={{ marginRight: "10px" }} />
          Notes
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
