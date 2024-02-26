import React from "react";
import "./admin.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import CalendarChart from "../../components/chart/calendar/Calendar";
import { PiStudent } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { FaBook } from "react-icons/fa";
import GraphChart from "../../components/chart/graph/Graph";
import PieGraph from "../../components/chart/pie/Pie";
import Table from "../../components/chart/table/Table";

const Admin = () => {
  return (
    <>
      <div className="adminDashboard">
        <Navbar />
        <Sidebar />
        <div className="contentBox">
          <div className="content">
            <div className="box">
              <div className="boxText">
                <div className="logo">
                  <PiStudent />
                </div>
                <div className="logo-title">
                  <h3>Students</h3>
                </div>
              </div>
              <p>200</p>
            </div>
            <div className="box">
              <div className="boxText">
                <div className="logo">
                  <FaChalkboardTeacher />
                </div>
                <div className="logo-title">
                  <h3>Teachers</h3>
                </div>
              </div>
              <p>200</p>
            </div>
            <div className="box">
              <div className="boxText">
                <div className="logo">
                  <SiGoogleclassroom />
                </div>
                <div className="logo-title">
                  <h3>Class</h3>
                </div>
              </div>
              <p>200</p>
            </div>
            <div className="box">
              <div className="boxText">
                <div className="logo">
                  <FaBook />
                </div>
                <div className="logo-title">
                  <h3>Section</h3>
                </div>
              </div>
              <p>200</p>
            </div>
            <div className="box">
              <div className="boxText">
                <div className="logo">
                  <FaBook />
                </div>
                <div className="logo-title">
                  <h3>Subjects</h3>
                </div>
              </div>
              <p>200</p>
            </div>
          </div>
          <div className="chartContent">
            <div className="chart">
              <div className="ChartBox1">
                <CalendarChart />
              </div>
            </div>
            <div className="chart">
              <div className="ChartBox2">
                <GraphChart />
              </div>
            </div>
            <div className="chart">
              <div className="ChartBox3">
                <PieGraph />
              </div>
            </div>
          </div>
        </div>
        <Table />
      </div>
    </>
  );
};

export default Admin;
