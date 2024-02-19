import React from "react";
import "./sidebar.scss";
import { IoMdMenu } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlinePhonelinkSetup } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-title">
          <h3>Softminds</h3>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <MdDashboard className="icons" />
          <span>Dashboard</span>
        </li>
        <li className="menu-item">
          <FaUserAlt className="icons" />
          <span> User</span>
        </li>
        <li className="menu-item">
          <FaChalkboardTeacher className="icons" />
          <span>Teacher</span>
        </li>
        <li className="menu-item">
          <MdOutlinePhonelinkSetup className="icons" />
          <span>Setup</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
