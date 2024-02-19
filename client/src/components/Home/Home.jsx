import React from "react";
import "./Home.scss";
import softmind from "../../assets/sm.png";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Quiz Management System</h1>
      </div>
      <div className="footer">
        <div className="footer-desc">
          <h3>Powered by</h3>
        </div>
        <div className="footer-logo">
          <img src={softmind} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
