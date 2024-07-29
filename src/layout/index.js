import React from "react";
import SideBar from "../component/SideBar";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <SideBar />
      <div className="flex-container">
        <Header title={props.title} />
        <section className="main-content">{props.children}</section>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
