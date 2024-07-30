import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const Header = ({ title }) => {
  return (
    <div>
      <header className="header">
        <h2>{title}</h2>
        <CiMenuKebab className="menu-bar" />
      </header>
      <hr className="divider" />
    </div>
  );
};

export default Header;
