import React, { useState } from "react";
import "./faculty.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const AddFacultyModal = ({ closeAddFacultyModal }) => {
  return (
    <div className="add-faculty-model">
      <div className="close-model-btn">
        <button className="close-btn" onClick={closeAddFacultyModal}>
          x
        </button>
      </div>
      <div className="addFaculty-input">
        <input
          className="addFaculty-input-field"
          type="text"
          placeholder="Enter faculty name"
        />
      </div>

      {/* This is taken from setup.jsx */}
      <div className="form-btn">
        <button className="cancel-btn" onClick={closeAddFacultyModal}>
          Cancel
        </button>
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
};

const Faculty = () => {
  const [isAddFacultyModelOpen, setIsAddFacultyModelOpen] = useState(false);

  const handleAddFaculty = () => {
    setIsAddFacultyModelOpen(true);
  };
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="faculty-container">
        <div className="addFaculty-container">
          <div className="search-box">
            <input
              type="search"
              placeholder="Search"
              className="search-field"
            />
          </div>
          <div className="addFaculty-btn">
            <button className="add-btn" onClick={handleAddFaculty}>
              Add Faculty
            </button>
          </div>
        </div>
        <div className="faculty-table-container">
          <table className="faculty-table">
            <thead>
              <tr>
                <th>Faculty ID</th>
                <th>Created By</th>
                <th>Faculty Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>01</td>
                <td>Admin@gmail.com</td>
                <td>Science</td>
                <td>
                  <button className="active-btn">Active</button>
                </td>
                <td>
                  <div className="action-icons">
                    <FaRegEdit />
                    <MdOutlineDelete />
                  </div>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      {isAddFacultyModelOpen && (
        <>
          <div
            className="overlay"
            onClick={() => setIsAddFacultyModelOpen(false)}
          />
          <AddFacultyModal
            closeAddFacultyModal={() => setIsAddFacultyModelOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default Faculty;
