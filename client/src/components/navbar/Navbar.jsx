import React from "react";
import "./navbar.scss";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="dashboard">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="icons">
          <IoSearchOutline />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
