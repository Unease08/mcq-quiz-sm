import React from "react";
import "./home.css";
import sm from "../../../assets/sm.png";
import { TiArrowSortedDown } from "react-icons/ti";

const Home = () => {
  return (
    <div className="home-container">
      <div className="curves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 255">
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
      <div className="home-main">
        <div className="home-greeting">
          <h1>Welcome Beyonce</h1>
          <p>
            Choose one from categories & see how many questions you can answer
            correctly out of a given question
          </p>
        </div>
      </div>
      <div className="subjects">
        <div className="box box1">
          <div className="waves">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#7974d7"
                fill-opacity="1"
                d="M0,320L26.7,298.7C53.3,277,107,235,160,197.3C213.3,160,267,128,320,149.3C373.3,171,427,245,480,261.3C533.3,277,587,235,640,186.7C693.3,139,747,85,800,90.7C853.3,96,907,160,960,202.7C1013.3,245,1067,267,1120,261.3C1173.3,256,1227,224,1280,202.7C1333.3,181,1387,171,1413,165.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="box-title">
            <span>English</span>
            <button className="submit" type="submit">
              Start Now
            </button>
          </div>
        </div>
        <div className="box box2">
          <div className="waves">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fca7d6"
                fill-opacity="1"
                d="M0,320L26.7,298.7C53.3,277,107,235,160,197.3C213.3,160,267,128,320,149.3C373.3,171,427,245,480,261.3C533.3,277,587,235,640,186.7C693.3,139,747,85,800,90.7C853.3,96,907,160,960,202.7C1013.3,245,1067,267,1120,261.3C1173.3,256,1227,224,1280,202.7C1333.3,181,1387,171,1413,165.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="box-title">
            <span>Math</span>
            <button className="submit" type="submit">
              Start Now
            </button>
          </div>
        </div>
        <div className="box box3">
          <div className="waves">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f7ca98"
                fill-opacity="1"
                d="M0,320L26.7,298.7C53.3,277,107,235,160,197.3C213.3,160,267,128,320,149.3C373.3,171,427,245,480,261.3C533.3,277,587,235,640,186.7C693.3,139,747,85,800,90.7C853.3,96,907,160,960,202.7C1013.3,245,1067,267,1120,261.3C1173.3,256,1227,224,1280,202.7C1333.3,181,1387,171,1413,165.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="box-title">
            <span>Physics</span>
            <button className="submit" type="submit">
              Start Now
            </button>
          </div>
        </div>
        <div className="box box4">
          <div className="waves">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#aaefea"
                fill-opacity="1"
                d="M0,320L26.7,298.7C53.3,277,107,235,160,197.3C213.3,160,267,128,320,149.3C373.3,171,427,245,480,261.3C533.3,277,587,235,640,186.7C693.3,139,747,85,800,90.7C853.3,96,907,160,960,202.7C1013.3,245,1067,267,1120,261.3C1173.3,256,1227,224,1280,202.7C1333.3,181,1387,171,1413,165.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="box-title">
            <span>Biology</span>
            <button className="submit" type="submit">
              Start Now
            </button>
          </div>
        </div>
        <div className="box box5">
          <div className="waves">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#80a8f7"
                fill-opacity="1"
                d="M0,320L26.7,298.7C53.3,277,107,235,160,197.3C213.3,160,267,128,320,149.3C373.3,171,427,245,480,261.3C533.3,277,587,235,640,186.7C693.3,139,747,85,800,90.7C853.3,96,907,160,960,202.7C1013.3,245,1067,267,1120,261.3C1173.3,256,1227,224,1280,202.7C1333.3,181,1387,171,1413,165.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="box-title">
            <span>Computer</span>
            <button className="submit" type="submit">
              Start Now
            </button>
          </div>
        </div>
      </div>
      <div className="user-footer">
        <span>Powered by : </span>
        <img src={sm} alt="" />
      </div>
    </div>
  );
};

export default Home;
