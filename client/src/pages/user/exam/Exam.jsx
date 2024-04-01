import React, { useEffect, useState } from "react";
import "./exam.css";
import { TiArrowSortedDown } from "react-icons/ti";
import sm from "../../../assets/sm.png";

const Exam = () => {
  // Dummy data for questions and options
  const questionsData = [
    {
      id: 1,
      text: "What is the full form of HTML?",
      options: [
        { id: "a", text: "Hyper Text Markup Language" },
        { id: "b", text: "Hyperlinks and Text Markup Language" },
        { id: "c", text: "Home Tool Markup Language" },
        { id: "d", text: "Hyper Text Makeup Language" },
      ],
    },
    {
      id: 2,
      text: "Which of the following is a programming language?",
      options: [
        { id: "a", text: "HTML" },
        { id: "b", text: "CSS" },
        { id: "c", text: "JavaScript" },
        { id: "d", text: "XML" },
      ],
    },
    {
      id: 3,
      text: "What does CSS stand for?",
      options: [
        { id: "a", text: "Cascading Style Sheets" },
        { id: "b", text: "Computer Style Sheets" },
        { id: "c", text: "Colorful Style Sheets" },
        { id: "d", text: "Creative Style Sheets" },
      ],
    },
    {
      id: 3,
      text: "What does CSS stand for?",
      options: [
        { id: "a", text: "Cascading Style Sheets" },
        { id: "b", text: "Computer Style Sheets" },
        { id: "c", text: "Colorful Style Sheets" },
        { id: "d", text: "Creative Style Sheets" },
      ],
    },
    {
      id: 3,
      text: "What does CSS stand for?",
      options: [
        { id: "a", text: "Cascading Style Sheets" },
        { id: "b", text: "Computer Style Sheets" },
        { id: "c", text: "Colorful Style Sheets" },
        { id: "d", text: "Creative Style Sheets" },
      ],
    },
    {
      id: 3,
      text: "What does CSS stand for?",
      options: [
        { id: "a", text: "Cascading Style Sheets" },
        { id: "b", text: "Computer Style Sheets" },
        { id: "c", text: "Colorful Style Sheets" },
        { id: "d", text: "Creative Style Sheets" },
      ],
    },
  ];

  //keep track of current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  //State to keep track of remaining time
  const [remainingTime, setRemainingTime] = useState(300); // 5 minutes in second
  //To track timer status
  const [timerActive, setTimerActive] = useState(true);

  //Function to handle "Next" button click
  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  //update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          setTimerActive(false); //Timer is no longer active
          return 0;
        }
      });
    }, 1000);

    //clean up timer on component unmount
    return () => clearInterval(timer);
  }, []);

  //calculate minutes and seconds from remaining time
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  //Get the current question
  const currentQuestion = questionsData[currentQuestionIndex];
  const totalQuestions = questionsData.length;

  return (
    <div className="exam-container">
      <div className="curves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill="#6C63FF"
            fillOpacity="0.32"
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
      <div className="exam-header-container">
        <div className="exam-header">
          <div className="exam-header-content">
            <h5>
              Subject : <span className="title-content">English</span>
            </h5>
            <h5>
              Time : <span className="title-content">{formattedTime}/5:00</span>
            </h5>
            <button type="submit" className="submit" disabled={!timerActive}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="exam-content-container">
        <div className="exam-content">
          {/* Display the total number of questions dynamically */}
          <span className="total-questions">{`${
            currentQuestionIndex + 1
          }/${totalQuestions}`}</span>
          {/* Display current question */}
          <div key={currentQuestion.id} className="question-content">
            <div className="question-field">
              <span className="question">{currentQuestion.text}</span>
              <div className="option-field">
                {/* Mapping through options to render radio buttons for each question */}
                {currentQuestion.options.map((option) => (
                  <label key={option.id} className="option-label">
                    <input
                      type="radio"
                      key={option.id}
                      name={`option-${currentQuestion.id}`}
                      value={option.id}
                    />
                    <span className="option-text">{option.text}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="answer-submit">
            {/* Render Next button if there are more questions */}
            {currentQuestionIndex < totalQuestions - 1 && (
              <button className="save-btn" onClick={handleNextClick}>
                Next
              </button>
            )}
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

export default Exam;
