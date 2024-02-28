import React from "react";
import "./home.css";
import sm from "../../../assets/sm.png";
import { TiArrowSortedDown } from "react-icons/ti";

const Home = () => {
  return (
    <div className="home-container">
      <div className="curves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#6c63ff"
            fillOpacity="0.29"
            d="M0,256L48,234.7C96,213,192,171,288,128C384,85,480,43,576,74.7C672,107,768,213,864,234.7C960,256,1056,192,1152,170.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="header">
        <div className="logo">
          <img src={sm} alt="" />
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>Beyonce</span>
          <TiArrowSortedDown />
        </div>
      </div>
    </div>
  );
};

export default Home;
