import React from "react";
import "./home.css";
import sm from "../../../assets/sm.png";
import { TiArrowSortedDown } from "react-icons/ti";

const Home = () => {
  return (
    <div className="home-container">
      <div className="curves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill="#6C63FF"
            fill-opacity="0.32"
            d="M0,96L40,122.7C80,149,160,203,240,186.7C320,171,400,85,480,58.7C560,32,640,64,720,96C800,128,880,160,960,170.7C1040,181,1120,171,1200,165.3C1280,160,1360,160,1400,160L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
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
          <span className="exam-schedule">Exam schedule</span>
          <div className="schedule">
            <div className="schedule-subject">
              <span className="schedule-subject-heading">Subject</span>
              <div className="schedule-subject-title-container">
                <span className="schedule-subject-title">Math</span>
                <span className="schedule-subject-title">Biology</span>
                <span className="schedule-subject-title">Nepali</span>
                <span className="schedule-subject-title">Computer</span>
                <span className="schedule-subject-title">Physics</span>
              </div>
            </div>
            <div className="schedule-date">
              <span className="schedule-subject-heading">Date</span>
              <div className="schedule-subject-title-container">
                <span className="schedule-subject-title">2080-12-21</span>
                <span className="schedule-subject-title">2080-12-21</span>
                <span className="schedule-subject-title">2080-12-21</span>
                <span className="schedule-subject-title">2080-12-21</span>
                <span className="schedule-subject-title">2080-12-21</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box box2">
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
            <span className="box-title-heading">English</span>
            <button className="submit" type="submit">
              Start Now
            </button>
          </div>
        </div>
        <div className="box box3">
          <div className="box3-heading">
            <div className="current-standing">
              <span className="current-standing-title">Current Standing </span>
            </div>
            <div className="view-all">
              <span className="view-all-title">View All</span>
            </div>
          </div>
          <div className="box3-heading-subheading">
            <div className="subheading-title">
              <span>Position</span>
              <div className="subheading-title-container">
                <span className="subheading-title-content">1</span>
                <span className="subheading-title-content">2</span>
                <span className="subheading-title-content">3</span>
                <span className="subheading-title-content">4</span>
              </div>
            </div>
            <div className="subheading-title">
              <span>Name</span>
              <div className="subheading-title-container">
                <span className="subheading-title-content-name">
                  Anish Shrestha
                </span>
                <span className="subheading-title-content-name">
                  Nimesh Mathema
                </span>
                <span className="subheading-title-content-name">
                  Saugat Nepal
                </span>
                <span className="subheading-title-content-name">
                  Suman Ghimire
                </span>
              </div>
            </div>
            <div className="subheading-title">
              <span>Points</span>
              <div className="subheading-title-container">
                <span className="subheading-title-content">100</span>
                <span className="subheading-title-content">200</span>
                <span className="subheading-title-content">300</span>
                <span className="subheading-title-content">400</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="box box4">
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
        </div> */}
      </div>
      <div className="user-footer">
        <span>Powered by : </span>
        <img src={sm} alt="" />
      </div>
    </div>
  );
};

export default Home;
