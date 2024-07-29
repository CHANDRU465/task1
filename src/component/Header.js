import React from "react";
import { CiMenuKebab } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h4>Dashboard</h4>
        <CiMenuKebab className="menu-bar" />
      </header>
      <hr className="divider" />
    </div>
  );
};

export default Header;
