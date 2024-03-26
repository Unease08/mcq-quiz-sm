import React, { useState } from "react";
import "./Profile.css";
import sm from "../../../assets/sm.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

const UpdatePhotoModel = ({ closeUpdatePhotoModel }) => {
  return (
    <div className="update-photo-model">
      <div className="close-model-btn">
        <button className="close-btn" onClick={closeUpdatePhotoModel}>
          x
        </button>
      </div>
      <div className="choose-photo-container">
        <h4>Choose Image</h4>
        <input className="photo-input" type="file" placeholder="Select image" />
        <div className="btn-container">
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [isUpdatePhotoModelOpen, setIsUpdatePhotoModelOpen] = useState(false);

  const handleUpdatePhoto = () => {
    setIsUpdatePhotoModelOpen(true);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const selectMonth = (month) => {
    console.log("selectMonth called with month:", month);
    setSelectedMonth(month);
    setShowDropdown(false);
  };
  return (
    <>
      <div className="profile-container">
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
        <div className="profile-content">
          <div className="profile-table">
            <span>User Info</span>
            <Form>
              <Col md={10}>
                <FormGroup>
                  <Input
                    id="exampleUsername"
                    name="username"
                    placeholder="Username"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Input
                    id="exampleNumber"
                    name="number"
                    placeholder="Number"
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </FormGroup>
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Input
                    id="exampleClass"
                    name="class"
                    placeholder="Class"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={10}>
                <FormGroup>
                  <Input
                    id="exampleSection"
                    name="class"
                    placeholder="Class"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Form>
          </div>
          <div className="profile-photo">
            <span>Profile Picture</span>
            <div className="profile-picture">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="profile-btn">
              <button type="submit" onClick={handleUpdatePhoto}>
                Update
              </button>
            </div>
          </div>
          <div className="profile-marks">
            <div className="profile-marks-header">
              <span className="marksheet">Marksheet</span>
              <div className="dropdown">
                <span className="marksheet-date" onClick={toggleDropdown}>
                  {selectedMonth} <IoIosArrowDown />
                </span>
                {showDropdown && (
                  <div className="dropdown-content" onClick={toggleDropdown}>
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((month) => (
                      <a
                        href="#"
                        key={month}
                        onClick={(e) => {
                          e.preventDefault();
                          selectMonth(month);
                        }}
                      >
                        {month}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="profile-marks-subHeader">
              <div className="subjects-column">
                <span className="subjects-name">Subject</span>
                <div className="subjects-content">
                  <span>Math</span>
                  <span>Biology</span>
                  <span>Nepali</span>
                  <span>Computer</span>
                  <span>Physics</span>
                  <span className="total">Total</span>
                </div>
              </div>
              <div className="score-column">
                <span className="subjects-score">Scores</span>
                <div className="subjects-content">
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span className="total">7</span>
                </div>
              </div>
            </div>
            <div className="download">
              <span className="download-marksheet">Download Marksheet</span>{" "}
              <i>
                <FaCloudDownloadAlt />
              </i>
            </div>
          </div>
        </div>
        <div className="user-footer">
          <span>Powered by : </span>
          <img src={sm} alt="" />
        </div>
      </div>
      {isUpdatePhotoModelOpen && (
        <>
          <div
            className="overlay"
            onClick={() => setIsUpdatePhotoModelOpen(false)}
          />
          <UpdatePhotoModel
            closeUpdatePhotoModel={() => setIsUpdatePhotoModelOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default Profile;
